import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',

  component: Badge,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['text']),
  },
};

const commonArgs = {
  count: 5,
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
