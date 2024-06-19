import { Meta, StoryObj } from '@storybook/react';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import Spin from '.';

const meta: Meta<typeof Spin> = {
  title: 'Components/Spin',
  component: Spin,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['tip', 'indicator']),
  },
};

type Story = StoryObj<typeof Spin>;

export const Default: Story = {
  args: {
    spinning: true,
  },
};

export default meta;
