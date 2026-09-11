import { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import TimePicker from '.';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/TimePicker',
  component: TimePicker,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    value: dayjs(),
  },
};

export default meta;
