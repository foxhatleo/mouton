export default {
	title: "Scribe Request Traces",
	tagline:
		"Turning requests for documentation into approved, published guides.",
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
Scribe’s Autocapture identifies workflows a team performs that have not yet been
documented. Request Traces connects the person asking for documentation with
people whose captured workflows can provide it. Once a trace is approved, it
becomes a published document.

I scoped the second version into seventeen tasks spanning the Django backend,
database schema, frontend, and analytics. I sequenced the work from a refactor
through schema and API changes to the interface and instrumentation, keeping
changes small enough to review separately.

One sensitive part was replacing a uniqueness constraint on a table receiving
ongoing writes. The migration involved reconciling conflicting rows, coordinating
the transition between constraints, and moving writes to the new model. I planned
that work alongside the application changes so the feature could roll out without
a maintenance window.

On the backend, I built request creation scoped to a workflow, permission checks
at that scope, and logic to match requests with suitable traces. Approval created
the document directly. The frontend added a pending-requests tab and an entry
point for requesting documentation on the workflow page.

During the schema work, I also identified and fixed an unintended cascading
delete in a related change that could have removed records unexpectedly.

Finally, I instrumented the path from request through approval to publication,
so the team could follow the full funnel. The feature brought requesting,
reviewing, and publishing documentation into one workflow.

Source code is private because this was a commercial project.
`,
};
