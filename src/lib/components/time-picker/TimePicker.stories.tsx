import { Meta, StoryObj } from '@storybook/react';
import moment from 'moment';
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
    value: moment(),
  },
};

export default meta;
