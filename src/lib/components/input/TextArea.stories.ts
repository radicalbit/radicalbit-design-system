import { Meta, StoryObj } from '@storybook/react';
import TextArea from './textArea';

const meta : Meta<typeof TextArea> = {
  title: 'Components/TextArea',

  component: TextArea,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

const commonArgs = {};

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
