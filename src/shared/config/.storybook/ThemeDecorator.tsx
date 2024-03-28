import {Decorator} from '@storybook/react';
import {Theme, ThemeProvider} from '../../../app/providers/ThemeProvider';

export const ThemeLightDecorator: Decorator = (Story, context) => {
	const {args} = context;
	args.theme = Theme.LIGHT;
	return (
		<ThemeProvider initialTheme={Theme.LIGHT}>
			<div className={`app ${args.theme}`}>
				<Story />
			</div>
		</ThemeProvider>
	);
};
export const ThemeDarkDecorator: Decorator = (Story, context) => {
	const {args} = context;
	args.theme = Theme.DARK;
	return (
		<ThemeProvider initialTheme={Theme.DARK}>
			<div className={`app ${args.theme}`}>
				<Story />
			</div>
		</ThemeProvider>
	);
};
