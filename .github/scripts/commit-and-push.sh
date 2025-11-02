#!/bin/bash
set -euo pipefail

# Script to commit and push version updates and biome auto-fixes
# Usage: commit-and-push.sh <trigger-commit-sha> <expected-timestamp>

TRIGGER_COMMIT_SHA="${1:-}"
EXPECTED_TIMESTAMP="${2:-}"
EXPECTED_VERSION="1.0.0-${EXPECTED_TIMESTAMP}"

if [ -z "$TRIGGER_COMMIT_SHA" ] || [ -z "$EXPECTED_TIMESTAMP" ]; then
  echo "Error: Missing required arguments"
  echo "Usage: $0 <trigger-commit-sha> <expected-timestamp>"
  exit 1
fi

echo "=== Starting commit and push step ==="
echo "Workflow trigger commit: $TRIGGER_COMMIT_SHA"
echo "Expected timestamp: $EXPECTED_TIMESTAMP"
echo "Expected version: $EXPECTED_VERSION"

# Ensure we're on main branch
echo ""
echo "=== Initial Git State ==="
echo "Current branch: $(git branch --show-current 2>/dev/null || echo 'unknown')"
echo "HEAD commit: $(git rev-parse HEAD 2>/dev/null || echo 'unknown')"
echo "HEAD commit message: $(git log -1 --format='%s' HEAD 2>/dev/null || echo 'unknown')"
echo "Git remote URL: $(git config --get remote.origin.url 2>/dev/null || echo 'unknown')"

git checkout main || {
  echo "Failed to checkout main branch"
  exit 1
}

echo ""
echo "=== Staged Changes ==="
git status --short || true

git add -A

echo ""
echo "=== After git add ==="
echo "Staged files:"
git diff --cached --name-status || true
git status --short || true

if ! git commit -m "chore: update version and apply biome auto-fixes [skip ci]"; then
  echo "Failed to commit changes"
  exit 1
fi

COMMIT_AFTER_ADD=$(git rev-parse HEAD)
echo ""
echo "=== After Commit ==="
echo "New commit hash: $COMMIT_AFTER_ADD"
echo "Commit message: $(git log -1 --format='%s' $COMMIT_AFTER_ADD)"
echo "Commit author: $(git log -1 --format='%an <%ae>' $COMMIT_AFTER_ADD)"
echo "Commit date: $(git log -1 --format='%ai' $COMMIT_AFTER_ADD)"
echo "Files changed in commit:"
git log -1 --name-status --format='' $COMMIT_AFTER_ADD || true
echo "Package.json version in commit:"
git show $COMMIT_AFTER_ADD:package.json 2>/dev/null | grep '"version"' || echo "Could not read package.json from commit"

# Retry logic for race conditions
MAX_RETRIES=5
RETRY_COUNT=0
EXPECTED_PREFIX="$EXPECTED_VERSION"

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  echo ""
  echo "=== Retry Attempt $((RETRY_COUNT + 1))/$MAX_RETRIES ==="
  # Fetch latest changes before pushing
  echo "Fetching latest from origin/main..."
  git fetch origin main || {
    echo "Failed to fetch origin/main"
    RETRY_COUNT=$((RETRY_COUNT + 1))
    sleep $((RETRY_COUNT * 2))
    continue
  }
  
  echo ""
  echo "=== After Fetch ==="
  LOCAL_HEAD=$(git rev-parse HEAD)
  REMOTE_HEAD=$(git rev-parse origin/main 2>/dev/null || echo "unknown")
  echo "Local HEAD: $LOCAL_HEAD"
  echo "Remote origin/main: $REMOTE_HEAD"
  echo "Local HEAD message: $(git log -1 --format='%s' $LOCAL_HEAD)"
  if [ "$REMOTE_HEAD" != "unknown" ]; then
    echo "Remote HEAD message: $(git log -1 --format='%s' $REMOTE_HEAD)"
  fi
  
  # Check branch relationship
  if git merge-base --is-ancestor HEAD origin/main 2>/dev/null; then
    echo "Local HEAD is ancestor of origin/main (we're behind or equal)"
  else
    echo "Local HEAD is NOT ancestor of origin/main (we're ahead or diverged)"
  fi
  
  if git merge-base --is-ancestor origin/main HEAD 2>/dev/null; then
    echo "Origin/main is ancestor of local HEAD (we're ahead)"
    COMMITS_AHEAD_BEFORE=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo "0")
    echo "Commits ahead of origin/main: $COMMITS_AHEAD_BEFORE"
    if [ "$COMMITS_AHEAD_BEFORE" -gt 0 ]; then
      echo "Commits to push:"
      git log --oneline origin/main..HEAD || true
    fi
  else
    echo "Origin/main is NOT ancestor of local HEAD (we're behind or diverged)"
  fi
  
  # Check if we're behind
  if ! git merge-base --is-ancestor HEAD origin/main 2>/dev/null; then
    echo ""
    echo "=== Starting Rebase ==="
    echo "Rebasing local commits on top of origin/main..."
    
    COMMITS_TO_REBASE=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo "0")
    echo "Commits to rebase: $COMMITS_TO_REBASE"
    if [ "$COMMITS_TO_REBASE" -gt 0 ]; then
      echo "Commits that will be rebased:"
      git log --oneline origin/main..HEAD || true
    fi
    
    if git rebase origin/main; then
      echo ""
      echo "=== After Rebase ==="
      NEW_HEAD=$(git rev-parse HEAD)
      echo "New HEAD after rebase: $NEW_HEAD"
      echo "HEAD commit message: $(git log -1 --format='%s' $NEW_HEAD)"
      echo "Rebase log:"
      git log --oneline -5 || true
      
      # Re-run biome after rebase to catch any new formatting issues
      echo ""
      echo "Running biome after rebase..."
      yarn biome check --write . || true
      
      if [ -n "$(git status --porcelain)" ]; then
        echo "Uncommitted changes detected after rebase/biome, committing..."
        git add -A
        git status --short || true
        if git commit -m "chore: update version and apply biome auto-fixes [skip ci]"; then
          echo "Committed changes after rebase"
          echo "New commit: $(git rev-parse HEAD)"
        else
          echo "Failed to commit changes after rebase (may already be committed)"
        fi
      else
        echo "No uncommitted changes after rebase/biome"
      fi
      
      # After rebase, check if we have commits to push
      # Check if we're ahead of origin/main (meaning we have local commits to push)
      COMMITS_AHEAD=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo "0")
      
      # Also check for uncommitted changes
      UNCOMMITTED_CHANGES=$(git status --porcelain | wc -l | tr -d ' ' || echo "0")
      
      echo ""
      echo "=== After Rebase Status ==="
      echo "Commits ahead of origin/main: $COMMITS_AHEAD"
      echo "Uncommitted changes count: $UNCOMMITTED_CHANGES"
      echo "Local HEAD: $(git rev-parse HEAD)"
      echo "Remote origin/main: $(git rev-parse origin/main 2>/dev/null || echo 'unknown')"
      
      if [ "$COMMITS_AHEAD" -gt 0 ]; then
        echo "Commits ahead details:"
        git log --oneline origin/main..HEAD || true
      fi
      
      if [ "$UNCOMMITTED_CHANGES" -gt 0 ]; then
        echo "Uncommitted changes:"
        git status --short || true
      fi
      
      if [ "$COMMITS_AHEAD" -gt 0 ]; then
        echo "We have $COMMITS_AHEAD commit(s) ahead of origin/main after rebase, will push"
      elif [ "$UNCOMMITTED_CHANGES" -gt 0 ]; then
        echo "We have uncommitted changes after rebase, will commit and push"
        git add -A
        git commit -m "chore: update version and apply biome auto-fixes [skip ci]" || true
      else
        # We're not ahead and no uncommitted changes, check if version was already updated on origin/main
        echo ""
        echo "=== Version Check After Rebase ==="
        COMMIT_SHA="$TRIGGER_COMMIT_SHA"
        
        echo "Trigger commit SHA: $COMMIT_SHA"
        echo "Expected version: $EXPECTED_VERSION"
        
        # Check version in origin/main HEAD (the actual remote branch)
        # Use a temporary file to avoid stdin issues
        echo "Reading package.json from origin/main..."
        git show origin/main:package.json > /tmp/package_remote.json 2>/dev/null || echo '{}' > /tmp/package_remote.json
        
        if [ -f /tmp/package_remote.json ]; then
          echo "Remote package.json content (version line):"
          grep '"version"' /tmp/package_remote.json || echo "Version not found in remote package.json"
        else
          echo "Failed to create temp file for remote package.json"
        fi
        
        VERSION_ON_ORIGIN=$(node -p "try { require('/tmp/package_remote.json').version || '' } catch(e) { '' }" 2>/dev/null || echo "")
        rm -f /tmp/package_remote.json
        
        # Also check local version after rebase
        LOCAL_VERSION=$(node -p "require('./package.json').version")
        
        echo "Local version (after rebase): $LOCAL_VERSION"
        echo "Version on origin/main (remote): $VERSION_ON_ORIGIN"
        echo "Expected version for commit $COMMIT_SHA: $EXPECTED_VERSION"
        
        # Only skip if:
        # 1. We have no commits to push (already checked above)
        # 2. AND no uncommitted changes (already checked above)
        # 3. AND the version on origin/main EXACTLY matches what we expect
        # This means another workflow run already pushed it for this commit
        if [[ -n "$VERSION_ON_ORIGIN" && "$VERSION_ON_ORIGIN" == "$EXPECTED_VERSION" ]]; then
          echo "Version already updated on origin/main by another workflow run (exact match) and no local commits, skipping"
          exit 0
        fi
        
        # If version doesn't match or we couldn't read it, we should still push
        if [[ -z "$VERSION_ON_ORIGIN" ]]; then
          echo "Could not read version from origin/main, will push to be safe"
        else
          echo "Version on origin/main is '$VERSION_ON_ORIGIN', not '$EXPECTED_VERSION' - continuing with push..."
        fi
      fi
    else
      echo "Rebase failed, aborting..."
      git rebase --abort || true
      RETRY_COUNT=$((RETRY_COUNT + 1))
      if [ $RETRY_COUNT -lt $MAX_RETRIES ]; then
        echo "Retrying after rebase failure... (attempt $RETRY_COUNT/$MAX_RETRIES)"
        sleep $((RETRY_COUNT * 2))
        continue
      else
        echo "Failed to rebase after $MAX_RETRIES attempts"
        exit 1
      fi
    fi
  else
    echo ""
    echo "=== No Rebase Needed ==="
    echo "Local branch is up to date with or ahead of origin/main"
    echo "Local HEAD: $(git rev-parse HEAD)"
    echo "Remote origin/main: $(git rev-parse origin/main 2>/dev/null || echo 'unknown')"
  fi
  
  # Before pushing, verify we have something to push
  echo ""
  echo "=== Pre-Push Verification ==="
  COMMITS_AHEAD=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo "0")
  UNCOMMITTED_CHANGES=$(git status --porcelain | wc -l | tr -d ' ' || echo "0")
  
  FINAL_LOCAL_HEAD=$(git rev-parse HEAD)
  FINAL_REMOTE_HEAD=$(git rev-parse origin/main 2>/dev/null || echo "unknown")
  
  echo "Commits ahead of origin/main: $COMMITS_AHEAD"
  echo "Uncommitted changes count: $UNCOMMITTED_CHANGES"
  echo "Local HEAD: $FINAL_LOCAL_HEAD"
  echo "Remote origin/main: $FINAL_REMOTE_HEAD"
  
  if [ "$COMMITS_AHEAD" -gt 0 ]; then
    echo "Commits that will be pushed:"
    git log --oneline origin/main..HEAD || true
    echo "Full commit details:"
    git log origin/main..HEAD --format='%H | %an | %ae | %ai | %s' || true
  fi
  
  if [ "$UNCOMMITTED_CHANGES" -gt 0 ]; then
    echo "Uncommitted changes:"
    git status --short || true
  fi
  
  if [ "$COMMITS_AHEAD" -eq 0 ] && [ "$UNCOMMITTED_CHANGES" -eq 0 ]; then
    echo ""
    echo "No commits or changes to push, but checking version to be sure..."
    COMMIT_SHA="$TRIGGER_COMMIT_SHA"
    
    echo "Reading remote package.json for version check..."
    git show origin/main:package.json > /tmp/package_remote_pre.json 2>/dev/null || echo '{}' > /tmp/package_remote_pre.json
    
    if [ -f /tmp/package_remote_pre.json ]; then
      echo "Remote package.json version line:"
      grep '"version"' /tmp/package_remote_pre.json || echo "Version not found"
    fi
    
    VERSION_ON_ORIGIN=$(node -p "try { require('/tmp/package_remote_pre.json').version || '' } catch(e) { '' }" 2>/dev/null || echo "")
    rm -f /tmp/package_remote_pre.json
    
    LOCAL_VERSION=$(node -p "require('./package.json').version")
    
    echo "Version check results:"
    echo "  Local version: $LOCAL_VERSION"
    echo "  Remote version: $VERSION_ON_ORIGIN"
    echo "  Expected version: $EXPECTED_VERSION"
    
    if [[ -n "$VERSION_ON_ORIGIN" && "$VERSION_ON_ORIGIN" == "$EXPECTED_VERSION" ]]; then
      echo ""
      echo "=== RESULT: Version already correct on origin/main, nothing to push ==="
      echo "Skipping push as version '$EXPECTED_VERSION' already exists on origin/main"
      exit 0
    fi
    
    echo ""
    echo "Version mismatch or couldn't verify:"
    echo "  - Version on origin/main: '$VERSION_ON_ORIGIN'"
    echo "  - Expected version: '$EXPECTED_VERSION'"
    if [[ -n "$VERSION_ON_ORIGIN" && "$VERSION_ON_ORIGIN" == "$EXPECTED_VERSION" ]]; then
      echo "  - Match: YES"
    else
      echo "  - Match: NO"
    fi
    echo "Will attempt push anyway to ensure changes are propagated"
  fi
  
  # Try to push with verbose output for debugging
  echo ""
  echo "=== Attempting Push ==="
  echo "Pushing to origin/main..."
  echo "Local branch: $(git branch --show-current)"
  echo "Remote tracking: $(git rev-parse --abbrev-ref --symbolic-full-name @{u} 2>/dev/null || echo 'not set')"
  echo "Git config remote.origin.url: $(git config --get remote.origin.url)"
  
  PUSH_OUTPUT=$(git push origin main 2>&1)
  PUSH_EXIT_CODE=$?
  
  echo "Push command exit code: $PUSH_EXIT_CODE"
  echo "Push output:"
  echo "$PUSH_OUTPUT"
  
  if [ $PUSH_EXIT_CODE -eq 0 ]; then
    echo ""
    echo "=== SUCCESS: Push completed ==="
    echo "Verifying push was successful..."
    git fetch origin main
    PUSHED_HEAD=$(git rev-parse origin/main)
    echo "Remote origin/main HEAD after push: $PUSHED_HEAD"
    echo "Local HEAD: $FINAL_LOCAL_HEAD"
    
    if [ "$PUSHED_HEAD" == "$FINAL_LOCAL_HEAD" ]; then
      echo "✓ Confirmed: Remote HEAD matches local HEAD"
    else
      echo "⚠ Warning: Remote HEAD does not match local HEAD"
    fi
    
    exit 0
  else
    echo ""
    echo "=== ERROR: Push Failed ==="
    echo "Push failed with exit code: $PUSH_EXIT_CODE"
    RETRY_COUNT=$((RETRY_COUNT + 1))
    if [ $RETRY_COUNT -lt $MAX_RETRIES ]; then
      echo "Push failed, will retry... (attempt $RETRY_COUNT/$MAX_RETRIES)"
      sleep $((RETRY_COUNT * 2))
    else
      echo ""
      echo "=== FATAL: Exhausted All Retries ==="
      echo "Failed to push after $MAX_RETRIES attempts"
      echo ""
      echo "Final state:"
      echo "  Local HEAD: $(git rev-parse HEAD)"
      echo "  Remote origin/main: $(git rev-parse origin/main 2>/dev/null || echo 'unknown')"
      echo "  Commits ahead: $(git rev-list --count origin/main..HEAD 2>/dev/null || echo '0')"
      echo "  Last push exit code: $PUSH_EXIT_CODE"
      echo "  Last push output:"
      echo "$PUSH_OUTPUT"
      exit 1
    fi
  fi
done

echo ""
echo "=== FATAL: Retry Loop Exhausted ==="
echo "Unexpected exit from retry loop without success or failure"
echo "Final state:"
echo "  Local HEAD: $(git rev-parse HEAD)"
echo "  Remote origin/main: $(git rev-parse origin/main 2>/dev/null || echo 'unknown')"
exit 1

