import { Meta, StoryObj } from '@storybook/react';
import RadioCards from './index';

const meta: Meta<typeof RadioCards> = {
  title: 'Components/RadioCards',
  component: RadioCards,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof RadioCards>;

const mockOptions = [
  {
    value: 'kafka',
    card: <h1>kafka</h1>,
  },
  {
    value: 'flink',
    card: <h1>flink</h1>,
  },
];

export const Group: Story = {
  args: {
    value: mockOptions[0].value,
    options: mockOptions,
  },
};

export default meta;
