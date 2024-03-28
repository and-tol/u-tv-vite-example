import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDarkDecorator, ThemeLightDecorator} from '../../../config/.storybook';

import Modal from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Shared/Modal',
	component: Modal,
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
	args: {
		children: 'Text',
	},
	decorators: [ThemeLightDecorator],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		isOpen: true,
		children: 'lorem ipsum 100',
	},
};

export const Dark: Story = {
	args: {
		...Primary.args
	},
	decorators: [ThemeDarkDecorator],
};
