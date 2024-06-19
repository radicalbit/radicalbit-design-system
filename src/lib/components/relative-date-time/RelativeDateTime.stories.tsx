import { Meta, StoryObj } from '@storybook/react';
import RelativeDateTime from './index';

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

export default meta;
