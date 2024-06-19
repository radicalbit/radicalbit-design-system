import { Meta, StoryObj } from '@storybook/react';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import Spinner from '.';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['tip', 'indicator']),
  },
};

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    spinning: true,
  },

  render: (props) => <Spinner {...props}>Content</Spinner>,
};

export default meta;
