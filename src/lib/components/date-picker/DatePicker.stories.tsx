import { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import DatePicker from '.';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    defaultValue: dayjs('2024-01-01'),
    readOnly: false,
  },
};

export default meta;
