// Debounce helper

/**
 * Debounces a function to limit the number of times it is called within a specified time interval.
 * @param fn - The function to be debounced
 * @param ms - The time interval in milliseconds
 * @returns A debounced function
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounce (fn: (...args: any[]) => any, ms: number): (...args: any[]) => void {
	let timeoutId: ReturnType<typeof setTimeout>;

	/**
	 * Debounced function that will delay the execution of the original function by the specified time interval.
	 * @param args - Arguments to be passed to the original function
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (...args: any[]) => {
		clearTimeout(timeoutId);
		// eslint-disable-next-line
		timeoutId = setTimeout(() => fn(...args), ms);
	};
}

export default debounce;
