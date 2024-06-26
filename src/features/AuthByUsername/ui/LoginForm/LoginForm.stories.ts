import type {Meta, StoryObj} from '@storybook/react';
import LoginForm from './LoginForm';
import {ThemeLightDecorator} from 'shared/config/.storybook/ThemeDecorator';
import {StoreDecorator} from 'shared/config/.storybook';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Feauters/LoginForm',
	component: LoginForm,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		// layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	// tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		className: {control: 'class'},
	},
	args: {
	},
	decorators: [ThemeLightDecorator, StoreDecorator],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

export const WithForm: Story = {};
export const WithError: Story = {};
