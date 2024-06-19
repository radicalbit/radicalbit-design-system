import { Meta, StoryObj } from '@storybook/react';
import moment from 'moment';
import DatePicker from './index';

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
    defaultValue: moment('2024-01-01'),
    readOnly: false,
  },
};

export default meta;
