export default {
	title: "Sigma File Columns",
	tagline: "Making files a first-class value type across a data platform.",
	date: "Apr 2025 - Jan 2026",
	website: "",
	github: "",
	windows: "",
	macos: "",
	android: "",
	pdf: "",
	pdfName: "",
	images: "",
	content: `
Sigma’s workbooks could hold numbers, text, dates, and booleans, but not files.
Between April 2025 and January 2026 I added them, in two related pieces: a file
column for Input Tables, whose cell value is a file or a set of files, and a File
Upload Control that lets someone viewing a published workbook attach a file which
then flows into an action, a form, or a table.

The cell is the part people see. Files can be dropped, pasted, or picked from a
dialog; uploads report progress and can be abandoned; a populated cell renders a
preview that opens images, video, and PDFs in place and offers a real download
rather than another preview. Each column carries its own limits on file size,
count, and accepted types, enforced in the file picker as well as on drop. Drag
and drop was harder than it sounds, because the browser fires drag events
globally and our grid already had two drag gestures of its own for reordering
rows and columns. It needed a shared hook owning the global drag state, per-cell
drop targets that light up only when the column can genuinely accept what is
hovering over it, and suppression of the browser default, which is to navigate
away to the file you just dropped.

The harder half was invisible. Sigma’s controls, forms, and actions share a
parameter system, and adding a value type to it is not a local change. The file
type had to be threaded through variable definitions and their URL encoding,
parameter binding, the lowering pass into the intermediate representation, the
embed API, and every action effect that sets a value. Then it had to become a
type in Sigma’s formula language, which meant visiting every consumer that
pattern-matches on formula types: actions, the evaluator, conditional alerting,
the read and programmatic APIs, even the generator that writes plain-English
summaries of an action sequence. That one change touched sixty-eight files, and
it had to land in step with matching work in a separate backend repository,
since the two halves are useless apart.

Somewhere in the middle, the column and the control started duplicating each
other, so I pulled the uploader and the restriction rules into shared modules.
The two surfaces disagree about what finishing an upload means, since a column
stages a cell edit while a control sets a value, but validation, progress,
errors, and cancellation behave identically and should not be allowed to drift
apart. The same reasoning carried into forms: generating a form from a table
that has file columns now produces file fields which inherit the column’s
restrictions, stored the same way number and date validation already are, so the
renderer can validate everything through one path.

Files also come with edges that have little to do with files. Anonymous embed
viewers have no identity to scope a stored object to, so upload has to disappear
gracefully rather than fail at the end of a progress bar. Organizations without
our storage integration provisioned should not be able to add the control in the
first place. Uploads themselves go through signed URLs against S3, Google Cloud
Storage, and Azure, which meant getting the content disposition header right for
filenames a user chose, including the ones chosen specifically to break it.

Both the file column and the File Upload Control shipped, with the form
integration landing in December 2025. It is my favorite kind of feature: a small
idea on the surface that turns out to require touching nearly every layer of the
system to do honestly.

Please note that the source code is not publicly accessible, given the
commercial nature of the project.
`,
};
