export default {
	title: "Spreadsheet Parity",
	tagline:
		"Closing the gap between Sigma’s Input Tables and a real spreadsheet.",
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
In November 2024 I joined [Sigma Computing](https://sigmacomputing.com), a cloud
business intelligence platform where analysts explore warehouse data in a
spreadsheet-like workbook. I joined the team behind Input Tables, the feature
that makes that data writable: editable tables inside a workbook whose edits are
committed back to the customer’s own warehouse. Input Tables already existed and
already had people responsible for them. What follows is what I added on top
over the next eighteen months, which began in the editing experience and ended
up reaching the Go service underneath and the protobuf contracts in between.

The people using Input Tables are spreadsheet natives, so every gap between our
grid and Excel was felt immediately. My first months went into closing those
gaps: double-click autofill, drag-to-reorder rows, and Excel-style
Cmd+Shift+Arrow range selection. Row reordering turned out to be the interesting
one, because a row has no position of its own. Order is a property of the
writeback log, so a move has to be modeled as a delete followed by a re-add with
regenerated sequence numbers. Range selection was blocked by bugs in the
keyboard library we depended on. I had written a replacement from scratch during
my first week, but I threw it away and sent fixes upstream to
[hotkeys-js](https://github.com/jaywcjlove/hotkeys-js) instead, then built the
feature on top of a one-line dependency bump. Owning less code was the better
trade.

The longer arc was two new column types. I picked up an unfinished multi-select
column and carried it to general availability, then designed and built
single-select from scratch, along with the colored pill rendering they share.
Assigning those colors is deceptively hard: options can come from a
user-authored list or from a live query against another sheet, adding an option
must never reshuffle the colors already on screen, and a child table has to
render the same pills as its parent. Working out which values a column actually
permits means walking the workbook’s graph of sheets, which can contain cycles,
so the resolver needed cycle detection and a depth cap to stop a deeply nested
reference from overrunning the warehouse’s query parser. Letting users convert a
text column into a select column meant generating transformation formulas that
our compiler lowers into dialect-specific SQL, correct on Snowflake, BigQuery,
Redshift, and Databricks alike, and matching the optimistic result the browser
had already drawn. In January 2026 I removed the beta badges myself, which was a
satisfying way to finish something I had picked up a year earlier.

Working on the frontend of a writeback feature eventually pulls you into the
service underneath it. On the Go side I built Redis-backed conflict detection,
so that two people editing the same cell find out before their edits reach the
warehouse, which needed a custom pipelined variant of \`MSetNX\` with per-key
semantics. I also deleted a previous-row-version mechanism from the commit path
across all four warehouse connectors, a change that removed far more code than
it added and closed a path by which customer data could be silently overwritten.
Smaller pieces along the way included redacting SQL from Databricks error paths
and designing a cross-service protobuf contract that lets three runtimes agree
on what triggered a given edit. A week of Rust rounded it out, vendoring an
abandoned date-parsing crate and teaching our CSV ingest to read day-first
international dates.

Spending long enough in one part of a codebase makes its safety net your problem
too. Our end-to-end suite for input tables was the flakiest in the repository,
so instead of retrying failures I collected a few months of them, sorted around
a hundred and twenty into four root causes, and fixed those. I added
render-count regression tests that fail continuous integration when a component
starts rendering more often than it used to, and migrated the eleven-spec suite
from Cypress to Playwright on shared fixtures the rest of the team could build
on. On the side I built an internal Chrome DevTools extension for inspecting
live workbook state, which turned a whole class of “what is the store actually
holding right now” questions into a panel you could simply look at.

All of this shipped continuously, mostly behind feature flags that I later
deleted myself. The select column family reached general availability in January
2026, file support went out alongside it, and the editing experience finally
behaves the way someone arriving from Excel expects it to.

Please note that the source code is not publicly accessible, given the
commercial nature of the project.
`,
};
