import { Meta, StoryObj } from '@storybook/react';
import RelativeUpTime from './index';

const meta: Meta<typeof RelativeUpTime> = {
  title: 'Components/RelativeUpTime',
  component: RelativeUpTime,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    timestamp: { control: 'date' },
    className: { defaultValue: '', control: 'text' },
    modifier: { defaultValue: '', control: 'text' },
  },
};

type Story = StoryObj<typeof RelativeUpTime>;

export const Group: Story = {
  args: {
    withTooltip: true,
    timestamp: Date.now() - 10000000,
  },
};

export default meta;
