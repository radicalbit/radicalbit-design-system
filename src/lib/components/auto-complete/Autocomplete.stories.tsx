import { Meta, StoryObj } from '@storybook/react';
import Autocomplete from './index';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',

  component: Autocomplete,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

const commonArgs = {};

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {
    ...commonArgs,
    style: { width: 200 },
    options: [
      { label: 'Burns Bay Road', value: 'Burns Bay Road' },
      { label: 'Downing Street', value: 'Downing Street' },
    ],
  },

};

export default meta;
