import { Meta, StoryObj } from '@storybook/react';
import Segmented from '.';

const meta: Meta<typeof Segmented> = {
  title: 'Components/Segmented',
  component: Segmented,

  tags: ['autodocs'],

  argTypes: {
    type: {
      control: 'select',
      options: [undefined, 'highlighted'],
    },
  },
};
type Story = StoryObj<typeof Segmented>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    options: ['Slot A', 'Slot B'],
  },
};

export const Highlighted: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'highlighted',
    options: ['Slot A', 'Slot B'],
  },
};

export default meta;
