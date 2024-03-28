import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDarkDecorator} from '../../config/.storybook';

import Loader from './Loader';
// import {classNames} from '/shared/lib/classNames/classNames';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Shared/Loader',
	component: Loader,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		// layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		className: {control: 'class'},
	},
	args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
	args: {},
};
export const Dark: Story = {
	args: {},
	decorators: [ThemeDarkDecorator],
};
