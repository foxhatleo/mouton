import { ReactElement } from "react";

export function interleave<A = any, T = any>(arr: A[], thing: T): (A | (T extends () => any ? ReturnType<T> : T))[] {
    // @ts-ignore
    return [].concat(...arr.map((n) => [n, typeof thing === "function" ? thing() : thing])).slice(0, -1);
}

export function newLineAsBr(s: string): (string | ReactElement)[] {
    return interleave(s.split("\n"), () => <br key={Math.random()} />);
}

export function newLineAsP(s: string): (string | ReactElement)[] {
    return s.split("\n").map((i, ind) => <p key={ind}>{i}</p>);
}

export function paragraph(s: string): (ReactElement)[] {
    return s.trim().split(/\n{2,}/gm).map((i, ind) => <p key={ind}>{i}</p>);
}
