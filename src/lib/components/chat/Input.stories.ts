import { Meta, StoryObj } from '@storybook/react';
import Input from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Chat/Input',

  component: Input,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

const commonArgs = {};

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
