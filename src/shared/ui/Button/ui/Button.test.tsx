import {render, screen} from '@testing-library/react';
import {containsSubstring} from 'shared/lib';
import {describe, expect, test} from 'vitest';
import Button, {ButtonTheme} from './Button';

describe('button', () => {
	test('render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('clear theme', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);

		const elementClasses = screen.getByText('TEST').className;
		const hasClearClass = containsSubstring(elementClasses, 'clear');

		expect(hasClearClass).toBeTruthy();
	});

	screen.debug();
});
