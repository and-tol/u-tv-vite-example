import type {Preview} from '@storybook/react';
import {
	RouterDecorator,
	StyleDecorator,
	ThemeLightDecorator,
} from '../src/shared/config/.storybook';


const preview: Preview = {
	decorators: [StyleDecorator, ThemeLightDecorator, RouterDecorator],
	parameters: {
		actions: {argTypesRegex: '^on[A-Z].*'},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	args: {},
};

export default preview;
