import debounce from './debounce';

describe('debounce', () => {
	let mockFn: jest.Mock;

	beforeEach(() => {
		mockFn = jest.fn();
		jest.useFakeTimers();
	});

	it('should call the original function after the specified delay', () => {
		const debounced = debounce(mockFn, 500);

		debounced();

		expect(mockFn).not.toHaveBeenCalled();

		jest.advanceTimersByTime(500);

		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	it('cancel the previous delayed call when called again', () => {
		const debounced = debounce(mockFn, 500);

		debounced();
		debounced();

		jest.advanceTimersByTime(250);
		expect(mockFn).not.toHaveBeenCalled();

		jest.advanceTimersByTime(500);
		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	it('pass arguments to the original function', () => {
		const debounced = debounce(mockFn, 500);

		debounced('arg1', 'arg2');

		jest.advanceTimersByTime(500);

		expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
	});
});
