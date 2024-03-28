import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import {describe, expect, test, vi} from 'vitest';
import {act, screen} from '@testing-library/react';
import Counter from './Counter';
import {useCounterStore} from '../index';
import ComponentRender from 'shared/lib/test/ComponentRender';

const user = userEvent.setup();

// Renders a div containing two buttons and a h1 element with the current counter value.
describe('Counter', () => {
	test('render a div with buttons and h1 element', () => {
		// Arrange
		ComponentRender(<Counter />);

		// Act
		const counterValueTitle = screen.getByTestId('value-title');
		const divElement = screen.getByTestId('counter-div');
		const incrementButton = screen.getByTestId('increment-btn');
		const decrementButton = screen.getByTestId('decrement-btn');

		// Assert
		expect(divElement).toBeInTheDocument();
		expect(divElement).toBeInTheDocument();
		expect(incrementButton).toBeInTheDocument();
		expect(decrementButton).toBeInTheDocument();
		expect(counterValueTitle).toBeInTheDocument();
		expect(counterValueTitle).toHaveTextContent('0');
	});

	test('increment', async () => {
		ComponentRender(<Counter />);

		// Act
		// const incrementButton = screen.getByTestId('increment-btn');
		// user.click(screen.getByTestId('increment-btn'));

		// Wait for the DOM to update
		// await waitFor(() => {
		// 	expect(screen.getByTestId('value-title')).toHaveTextContent('1');
		// });

		await act(async () => {
			await user.click(await screen.findByRole('button', {name: /Increment/i}));
		});

		const counterValueTitle = screen.getByTestId('value-title');

		// Assert
		expect(await counterValueTitle).toHaveTextContent('1');
	});

	test('decrement', async () => {
		ComponentRender(<Counter />);

		const decrementButton = screen.getByTestId('decrement-btn');
		const counterValueTitle = screen.getByTestId('value-title');

		// Act
		await act(async () => {
			await user.click(decrementButton);
		});

		// Assert
		expect(await counterValueTitle).toHaveTextContent('0');
	});

	test('call decrement function', async () => {
		const incrementSpy = vi.spyOn(useCounterStore.getState().controls, 'decrement');

		ComponentRender(<Counter />);

		await act(async () => {
			await user.click(await screen.findByRole('button', {name: /Decrement/i}));
		});

		expect(incrementSpy).toHaveBeenCalled();
	});

	test('call increment function', async () => {
		const incrementSpy = vi.spyOn(useCounterStore.getState().controls, 'increment');

		ComponentRender(<Counter />);

		await act(async () => {
			await user.click(await screen.findByRole('button', {name: /Increment/i}));
		});

		expect(incrementSpy).toHaveBeenCalled();
	});
});
