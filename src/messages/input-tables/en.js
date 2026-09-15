export default {
	title: "Sigma Input Tables",
	tagline: "Bringing familiar spreadsheet editing to warehouse-backed tables.",
	date: "Nov 2024 - May 2026",
	website: "",
	github: "",
	windows: "",
	macos: "",
	android: "",
	pdf: "",
	pdfName: "",
	images: "",
	content: `
At [Sigma Computing](https://sigmacomputing.com), Input Tables let users edit
data inside a workbook and save their changes to their own data warehouse.
From November 2024 to May 2026, I worked on the team responsible for the feature,
adding spreadsheet interactions, new column types, and improvements to the
services that write those edits back.

I started with familiar editing behaviors: double-click autofill, drag-to-reorder
rows, and Excel-style Cmd+Shift+Arrow selection. Row reordering required more than
a visual move. Since order comes from the writeback log, moving a row meant
deleting and re-adding it with new sequence numbers. For keyboard selection,
I contributed fixes to [hotkeys-js](https://github.com/jaywcjlove/hotkeys-js)
rather than maintaining a separate keyboard library.

I took multi-select columns through to general availability and designed and
built single-select columns, including their shared colored labels. Options could
come from a user-defined list or a query against another table. Their colors had
to remain stable as options changed and consistent between parent and child
tables. Resolving allowed values required traversing table relationships, with
cycle detection and a depth limit for nested references. Converting text columns
to select columns also required formulas that compiled correctly for Snowflake,
BigQuery, Redshift, and Databricks, while matching the browser’s optimistic
updates. Both column types reached general availability in January 2026.

The work extended into the backend. In Go, I built Redis-backed conflict detection
to identify concurrent edits to the same cell before they reached the warehouse.
I also removed an older row-version mechanism from all four warehouse connectors,
closing a path that could silently overwrite customer data. Other contributions
included SQL redaction in Databricks errors, a cross-service protobuf contract
for identifying what triggered an edit, and support for day-first dates in the
Rust CSV importer.

I also worked on the feature’s development tools and tests. I traced roughly 120
end-to-end test failures to four root causes and fixed them, added regression
checks for unnecessary component renders, and migrated eleven test specs from
Cypress to Playwright using shared fixtures. An internal Chrome DevTools extension
I built made live workbook state easier to inspect during debugging.

These changes shipped incrementally over eighteen months. Alongside the
[file support](/file-columns/) I worked on, they expanded what users could enter
and made common spreadsheet tasks available directly in Input Tables.

Source code is private because this was a commercial project.
`,
};
