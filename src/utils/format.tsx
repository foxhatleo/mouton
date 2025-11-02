import type { ReactElement } from "react";
import NewPageLink from "@/components/NewPageLink";

export function interleave<A = unknown, T = unknown>(
	arr: A[],
	thing: (item: A, index: number) => T,
): (A | T)[] {
	return arr.flatMap((i, ind) => [i, thing(i, ind)]).slice(0, -1);
}

export function newLineAsBr(s: string): (string | ReactElement)[] {
	const lines = s.split("\n");
	return interleave(lines, (line) => <br key={`br-${line.slice(0, 20)}`} />);
}

export function newLineAsP(s: string): (string | ReactElement)[] {
	return s.split("\n").map((i) => <p key={`p-${i.slice(0, 50)}`}>{i}</p>);
}

const LINK_REGEX = /(\[[^[\]()]+]\([^[\]()]+\))/gi;
const LINK_REGEX2 = /^\[([^[\]()]+)]\(([^[\]()]+)\)$/i;

export function paragraph(s: string): ReactElement[] {
	return s
		.trim()
		.split(/\n{2,}/gm)
		.map((i) => {
			const res: (string | ReactElement)[] = i.split(LINK_REGEX);
			for (let a = 0, b = res.length; a < b; a += 1) {
				const c = (res[a] as string).match(LINK_REGEX2);
				if (c) {
					res[a] = (
						<NewPageLink key={`link-${c[2]}-${c[1]}`} href={c[2]}>
							{c[1]}
						</NewPageLink>
					);
				}
			}
			return res.flatMap((i2) =>
				typeof i2 === "string"
					? (() => {
							const parts = i2.split("`");
							const result: (string | ReactElement)[] = [];
							for (let j = 0; j < parts.length; j += 1) {
								result.push(parts[j] as string);
								if (j + 1 < parts.length) {
									const codeContent = parts[j + 1] ?? "";
									result.push(
										<code key={`code-${codeContent.slice(0, 30)}`}>
											{codeContent}
										</code>,
									);
									j += 1;
								}
							}
							return result;
						})()
					: i2,
			);
		})
		.map((i) => <p key={`para-${JSON.stringify(i).slice(0, 50)}`}>{i}</p>);
}
