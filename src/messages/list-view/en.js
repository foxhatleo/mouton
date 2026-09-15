export default {
	title: "Scribe List View",
	tagline: "Helping teams find and manage documents in a sortable list.",
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
[Scribe](https://scribe.com) turns recorded workflows into step-by-step
documentation. As teams accumulated more documents, the app’s card layout became
harder to scan. List View introduced a sortable table alongside the existing grid.
It was the first project I led at Scribe, from prototype to full rollout.

The initial version showed document titles, creators, teams, creation and edit
dates, and view counts. I kept sorting within the backend’s existing capabilities
and recorded creator and team sorting as follow-up work. This kept the first
release focused while making its limits explicit.

I extended the view across saved, shared, and personal collections, folders, and
trash. Each page needed different columns and row actions, so I developed a common
structure that could accommodate those differences. A detailed review surfaced
roughly twenty smaller issues, including a redundant creator column on personal
content and a tag background that disrupted the row’s hover highlight.

I added adoption tracking and rolled the feature out to half of production before
completing the rollout the following Monday. I also wrote the launch announcement
and guidance for the customer success team. The result gave teams a consistent
way to scan document details and sort their collections without opening each item.

Source code is private because this was a commercial project.
`,
};
