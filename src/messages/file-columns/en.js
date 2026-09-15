export default {
	title: "Sigma File Columns",
	tagline: "Adding file uploads to tables, controls, and forms in Sigma.",
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
From April 2025 to January 2026, I added file support to Sigma through two
connected features: file columns in Input Tables and a File Upload Control for
published workbooks. Together, they let users attach files to table cells and
pass uploads into actions and forms.

Users can drag, paste, or select files, track upload progress, and cancel uploads.
Cells show previews for images, video, and PDFs, with a separate download option.
Each column defines limits on file size, count, and accepted types. Supporting
drag and drop meant coordinating file uploads with the grid’s existing row and
column reordering gestures. I built a shared hook for global drag state and
cell-level drop targets, while preventing the browser from navigating away when
a file was dropped.

Behind the interface, files needed to become a value type throughout Sigma’s
parameter system and formula language. I carried that type through variable
definitions, URL encoding, parameter binding, compilation, the embed API, and
actions. The change also reached formula evaluation, alerts, and programmatic
APIs, with coordinated updates in the backend repository.

The column and control shared upload behavior but handled the result differently:
a column stages a cell edit, while a control sets a value. I extracted their
uploader and validation rules into shared modules so progress, errors, and
cancellation stayed consistent. Forms generated from tables also inherited each
file column’s restrictions, using the same validation path as other field types.

Access and storage configuration shaped the experience too. Uploads were hidden
for anonymous embed viewers, and organizations needed a storage integration
before they could add the control. Uploads used signed URLs for S3, Google Cloud
Storage, and Azure, including careful handling of user-provided filenames in
Content-Disposition headers.

Both features shipped, with form integration landing in December 2025. The work
connected a visible editing feature to the type system, storage services, and
validation rules it depended on.

Source code is private because this was a commercial project.
`,
};
