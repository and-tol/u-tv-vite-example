import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDarkDecorator} from '../../config/.storybook';

import AppLink, {AppLinkTheme} from './AppLink';
// import {classNames} from '/shared/lib/classNames/classNames';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Shared/AppLink',
	component: AppLink,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		// layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		className: {control: 'class'},
		// type: {control: 'type'},
	},
	args: {
		to: '/',
		children: 'Text',
	},
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
	},
};
export const Secondary: Story = {
	args: {
		theme: AppLinkTheme.SECONDARY,
	},
	// decorators: [ThemeDarkDecorator],
};
export const Red: Story = {
	args: {
		theme: AppLinkTheme.RED,
	},
	decorators: [ThemeDarkDecorator],
};
