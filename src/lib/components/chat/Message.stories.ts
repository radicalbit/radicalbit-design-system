import { Meta, StoryObj } from '@storybook/react';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import Message from './message';

const meta: Meta<typeof Message> = {
  title: 'Components/Chat/Message',

  component: Message,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['name', 'message', 'replyName', 'replyMessage']),
  },
};

const commonArgs = {
  name: 'John Doe',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  replyName: 'Jane Doe',
  replyMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
