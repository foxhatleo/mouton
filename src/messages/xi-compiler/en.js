export default {
	title: "Xi Compiler",
	tagline: "A fully functional compiler written from scratch.",
	date: "Jan 2020 - May 2020",
	website: "",
	github: "",
	windows: "",
	macos: "",
	android: "",
	pdf: "",
	pdfName: "",
	images: "",
	content: `
In the context of a practical application project for my Advanced Compiler
Construction course, I collaborated within a team comprising four members, where
our primary endeavor was to architect and build a bespoke compiler utilizing the
Java programming language. The compiler we developed was purposefully designed
to take as input the source code written in Xi, a programming language that bears
resemblance to C in its imperative, statically typed, and procedural paradigm.
The final output our compiler produced was an executable following the x86
architecture specifications.

The entire compiler’s design and development was executed from the ground up,
comprising an array of integral components. These fundamental units, namely the
lexical analyzer (or lexer), the syntax analyzer (or parser), the intermediate
representation (IR) generator, and the code generator, were all coded from
scratch. Each constituent part played a pivotal role in the conversion process,
starting from the source code to the final executable file.

The first part of the translation process, the lexer, was developed using the
Construction of Useful Parsers (CUP) generator applied to a tailor-made
grammar file. The purpose of the lexer in the context of compiler design is
to analyze the incoming stream of characters from the source code and convert
them into a meaningful set of tokens based on the given grammar rules. These
tokens are semantic units like identifiers, keywords, operators, and other
syntax elements.

Upon successful lexical analysis, the resultant tokens are forwarded to the
parser, which acts as the second step in the translation pipeline. Here, the
parser assumes the responsibility of analyzing the token stream provided by
the lexer to ensure its conformance with the specified grammar. This
grammatical check involves building an Abstract Syntax Tree (AST) that
encapsulates the hierarchical relationship among various tokens. The tree is
then converted into an intermediate representation (IR), a lower-level,
platform-independent data format.

The generated IR is designed using our custom data structures, providing a
more manageable format for optimizing and generating the target code. An
essential optimization technique, constant folding, is deployed at this stage.
This method focuses on identifying and computing at compile-time the
expressions in the code that are constant, thereby eliminating the need for
their unnecessary evaluation during runtime, consequently leading to an
improvement in the execution efficiency.

Finally, the IR is passed on to the last component in the translation process,
the code generator. This module interprets the optimized IR to output a code
that is compliant with the targeted machine architecture, in this case, x86.
The code generator also runs additional optimization techniques to further
improve the code’s performance and efficiency. As a result, the final product
of this intricate process is an executable file that accurately reflects the
initial Xi source code while adhering to the efficiency and optimization
principles of advanced compiler construction.

Regrettably, due to Cornell’s rules on academic integrity, the source code isn’t
accessible to the general public.
`,
};
