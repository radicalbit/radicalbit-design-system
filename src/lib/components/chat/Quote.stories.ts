import { Meta, StoryObj } from '@storybook/react';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import Quote from './quote';

const meta: Meta<typeof Quote> = {
  title: 'Components/Chat/Quote',

  component: Quote,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['name', 'message']),
  },
};

const commonArgs = {
  name: 'John Doe',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
