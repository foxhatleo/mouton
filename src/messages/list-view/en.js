export default {
	title: "Scribe List View",
	tagline: "A sortable, scannable table view for every content surface.",
	date: "Jul 2026 - Aug 2026",
	website: "",
	github: "",
	windows: "",
	macos: "",
	android: "",
	pdf: "",
	pdfName: "",
	images: "",
	content: `
[Scribe](https://scribe.com) turns a recorded workflow into step-by-step
documentation, and teams accumulate a great many of those documents. The app
showed all of them as cards, which is pleasant for browsing ten things and
useless for finding one thing among two thousand. List View adds a table as the
alternative, and it was the first project I led at Scribe, from the first
prototype through to the rollout announcement.

The first version went out behind a flag: a toggle between the card grid and a
list showing title, creator, team, created and edited dates, and view count,
sortable on the columns the backend could already sort. Sorting by creator and
by team did not make the cut, because the backend had no support for it, the
grid had never offered it either, and the change was already large. I said as
much in the review thread and filed the follow-up rather than quietly growing
the pull request. Deciding what not to build is most of what shipping on time
actually consists of.

From there it extended to every surface that lists content: saved, shared, and
personal collections, folders, and trash. Each of those has its own ideas about
which columns are meaningful and which row actions apply, so the work was less
about the table component and more about finding the single shape all of those
pages could agree on without collapsing into a pile of special cases.

Once it was real, I spent an afternoon going through it as a critic rather than
as its author, and came out with about twenty small defects worth their own
tickets. Hiding the creator column on the page that only ever shows your own
work. Fixing an application tag chip that punched a hole through the row’s hover
tint. None of them matter individually, and together they are the difference
between a feature that works and one that feels finished.

The last piece was making the rollout legible. I added instrumentation to
measure adoption, took the feature to half of production, watched it, and
completed the rollout the following Monday. I wrote the launch announcement and
the heads-up for our customer success team myself, which was a useful exercise
in describing my own work in terms of what it does for somebody else.

Please note that the source code is not publicly accessible, given the
commercial nature of the project.
`,
};
