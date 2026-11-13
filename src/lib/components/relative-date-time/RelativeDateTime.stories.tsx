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

export const ThresholdDuration: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
      <RelativeDateTime threshold={{ hours: 1 }} timestamp={Date.now() - 30 * 60 * 1000} withTooltip />
      <RelativeDateTime threshold={{ hours: 1 }} timestamp={Date.now() - 2 * 60 * 60 * 1000} withTooltip />
      <RelativeDateTime threshold={{ hours: 1, minutes: 30 }} timestamp={Date.now() - 80 * 60 * 1000} withTooltip />
      <RelativeDateTime threshold={{ weeks: 1 }} timestamp={Date.now() - 5 * 24 * 60 * 60 * 1000} withTooltip />
    </div>
  ),
};

export default meta;
