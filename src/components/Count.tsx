import { MAXCHAR } from "../lib/constants.ts";

export default function Count({ length }: { length: number }) {
	const charCount = MAXCHAR - length;
	return <p className="u-italic">{charCount}</p>;
}
