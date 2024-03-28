import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDarkDecorator} from '../../../shared/config/.storybook/';

import PageError from './PageError';
// import {classNames} from '/shared/lib/classNames/classNames';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'widget/PageError',
	component: PageError,
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
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {
		...Light.args,
	},
	decorators: [ThemeDarkDecorator],
};
