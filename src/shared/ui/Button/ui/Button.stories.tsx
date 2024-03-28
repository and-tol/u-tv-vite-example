import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDarkDecorator, ThemeLightDecorator} from '../../../config/.storybook/ThemeDecorator';

import Button, {ButtonSize, ButtonTheme} from './Button';
// import {classNames} from '/shared/lib/classNames/classNames';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Shared/Button',
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		// layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		// backgroundColor: {control: 'color'},
		className: {control: 'class'},
		type: {control: 'type'},
	},
	args: {
		children: 'Text',
	},
	decorators: [ThemeLightDecorator],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

export const Clear: Story = {
	args: {
		...Primary.args,
		children: 'Clear',
		theme: ButtonTheme.CLEAR,
	},
};
export const ClearInverted: Story = {
	args: {
		...Primary.args,
		children: 'Clear Inverted',
		theme: ButtonTheme.CLEAR_INVERTED,
	},
};
export const Outline: Story = {
	args: {
		...Primary.args,
		children: 'Outline',
		theme: ButtonTheme.OUTLINE,
	},
};
export const OutlineSizeL: Story = {
	args: {
		...Primary.args,
		children: 'Outline',
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.L,
	},
};
export const OutlineDark: Story = {
	args: {
		...Primary.args,
		children: 'Outline',
		theme: ButtonTheme.OUTLINE,
	},
	decorators: [ThemeDarkDecorator],
};
export const BackgroundTheme: Story = {
	args: {
		...Primary.args,
		children: 'Outline',
		theme: ButtonTheme.BACKGROUND,
	},
};
export const BackgroundInvertedTheme: Story = {
	args: {
		...Primary.args,
		children: 'Outline',
		theme: ButtonTheme.BACKGROUND_INVERTED,
	},
	decorators: [ThemeDarkDecorator],
};
export const Square: Story = {
	args: {
		...Primary.args,
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
	},
};
export const SquareSizeL: Story = {
	args: {
		...Primary.args,
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L,
	},
};
export const SquareSizeXL: Story = {
	args: {
		...Primary.args,
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL,
	},
};
