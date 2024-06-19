import { Meta, StoryObj } from '@storybook/react';
import RangePicker from './index';

const meta: Meta<typeof RangePicker> = {
  title: 'Components/RangePicker',
  component: RangePicker,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof RangePicker>;

export const Group: Story = {
  args: {},
};

export default meta;
