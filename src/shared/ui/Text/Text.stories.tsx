import type {Meta, StoryObj} from '@storybook/react';
// import {ThemeDarkDecorator, ThemeLightDecorator} from '../../../config/.storybook/ThemeDecorator';

import {ThemeDarkDecorator, ThemeLightDecorator} from 'shared/config/.storybook';
import Text from './Text';
// import {classNames} from '/shared/lib/classNames/classNames';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Shared/Text',
	component: Text,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		// layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		// className: {control: 'class'},
		// type: {control: 'type'},
		// title: {control: 'string'},
		// text: {control: 'string'},
	},
	// args: {
	// 	title: 'Title',
	// 	text: 'Lorem ipsum dolor sit amet, consectet',
	// },
	decorators: [ThemeLightDecorator],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		title: 'Title',
		text: 'Lorem ipsum dolor sit amet, consectet',
	},
};
export const onlyTitle: Story = {
	args: {
		title: 'Title',
	},
};
export const onlyText: Story = {
	args: {
		text: 'Lorem ipsum dolor sit amet, consectet',
	},
};
export const PrimaryDark: Story = {
	args: {
		title: 'Title',
		text: 'Lorem ipsum dolor sit amet, consectet',
	},
	decorators: [ThemeDarkDecorator],
};
export const onlyTitleDark: Story = {
	args: {
		title: 'Title',
	},
	decorators: [ThemeDarkDecorator],
};
export const onlyTextDark: Story = {
	args: {
		text: 'Lorem ipsum dolor sit amet, consectet',
	},
	decorators: [ThemeDarkDecorator],
};
