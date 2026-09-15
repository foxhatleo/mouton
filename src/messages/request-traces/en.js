export default {
	title: "Scribe Request Traces",
	tagline:
		"A request and approval loop that turns captured work into documentation.",
	date: "Jun 2026 - Aug 2026",
	website: "",
	github: "",
	windows: "",
	macos: "",
	android: "",
	pdf: "",
	pdfName: "",
	images: "",
	content: `
Scribe’s Autocapture notices the processes a team actually performs and surfaces
the ones nobody has written down. Knowing that a workflow exists is only half the
problem, though, because the person who wants it documented is usually not the
person who knows how to do it. Request Traces closes that loop: you ask for a
workflow to be documented, the request reaches the people whose captured traces
could satisfy it, and approving one turns that trace into a published document.

The second version of this was the largest thing I have scoped by myself. I
broke it into seventeen tickets and sequenced them deliberately backend first:
an inert refactor that changed no behavior, then the schema migrations, then the
new endpoints, then the constraint change, then the frontend, then
instrumentation. The ordering is the whole trick. Every step stays independently
reviewable and independently revertible, and the changes with the least room for
error land while nothing is depending on them yet.

The riskiest step was replacing a uniqueness constraint on a table that is being
written to continuously. There is no maintenance window for that, so it went out
as a drain and swap: introduce the new constraint alongside the old one,
reconcile the rows that violate it, move writes across, and only then drop the
original. The alternative is a migration that takes a lock on a live table and
takes the product down with it.

The backend is Python and Django: a create endpoint scoped to a single workflow
with permissions checked at that scope, resolution logic that matches a request
against whichever trace can actually answer it, and creation on approval, so
that accepting a request is a single decision rather than a decision followed by
a chore. The frontend added a tab for pending requests and an asking flow on the
workflow page itself, where the question tends to occur to somebody in the first
place.

Partway through the schema work I noticed that a neighboring consolidation
change had introduced a cascading delete along a relationship that never had one
before, which would have quietly removed records nothing in the product expected
to lose. It was not my change and not my ticket, but it was inside the part of
the system I happened to be holding in my head, so I filed it and fixed it.

The final tickets were funnel instrumentation, so that asking, approving, and
publishing can be read as one path rather than three unrelated events. It is an
easy step to skip and a hard one to reconstruct afterwards, and without it you
end up guessing about the feature you just built.

Please note that the source code is not publicly accessible, given the
commercial nature of the project.
`,
};
