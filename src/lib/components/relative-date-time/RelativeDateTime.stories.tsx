import { Meta, StoryObj } from '@storybook/react';
import RelativeDateTime from '.';

const meta: Meta<typeof RelativeDateTime> = {
  title: 'Components/RelativeDateTime',
  component: RelativeDateTime,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    timestamp: { control: 'date' },
  },
};

type Story = StoryObj<typeof RelativeDateTime>;

export const Group: Story = {
  args: {
    withTooltip: true,
    timestamp: Date.now(),
  },
};

export const Refresh: Story = {
  args: {
    refreshInterval: 5,
    timestamp: Date.now(),
    withTooltip: true,
  },
};

export default meta;
