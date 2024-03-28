export default function containsSubstring(inputString: string, substring: string): boolean {
	const regex = new RegExp(substring);
	return regex.test(inputString);
}
