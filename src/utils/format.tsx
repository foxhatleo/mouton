import type { ReactElement } from "react";
import NewPageLink from "@/components/NewPageLink";

export function interleave<A = unknown, T = unknown>(
	arr: A[],
	thing: () => T,
): (A | T)[] {
	return arr.flatMap((i) => [i, thing()]).slice(0, -1);
}

export function newLineAsBr(s: string): (string | ReactElement)[] {
	return interleave(s.split("\n"), () => <br key={Math.random()} />);
}

export function newLineAsP(s: string): (string | ReactElement)[] {
	return s.split("\n").map((i, ind) => <p key={ind}>{i}</p>);
}

const LINK_REGEX = /(\[[^\[\]()]+]\([^\[\]()]+\))/gi;
const LINK_REGEX2 = /^\[([^\[\]()]+)]\(([^\[\]()]+)\)$/i;

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
						<NewPageLink key={`l${a}`} href={c[2]}>
							{c[1]}
						</NewPageLink>
					);
				}
			}
			return res.flatMap((i2) =>
				typeof i2 === "string"
					? i2.split("`").map((i, ind) => {
							if (ind % 2 === 1) {
								return <code key={`c${ind}`}>{i}</code>;
							}
							return i;
						})
					: i2,
			);
		})
		.map((i, ind) => <p key={`p${ind}`}>{i}</p>);
}
