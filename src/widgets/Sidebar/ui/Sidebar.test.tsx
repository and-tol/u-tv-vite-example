import {describe, expect, test} from 'vitest';
import {fireEvent, screen} from '@testing-library/react';
import Sidebar from './Sidebar';
import {ComponentRender, containsSubstring} from 'shared/lib';

describe('Sidebar', () => {
	test('with only first param', () => {
		ComponentRender(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('toggle', () => {
		ComponentRender(<Sidebar />);
		const toggleButton = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleButton);

		const elementClasses = screen.getByTestId('sidebar').className;
		const hasCollapsedClass = containsSubstring(elementClasses, 'collapsed');

		expect(hasCollapsedClass).toBeTruthy();

		screen.debug();
	});
});
