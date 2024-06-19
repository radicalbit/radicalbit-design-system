import { Meta, StoryObj } from '@storybook/react';
import Tooltip from '.';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Hover me',
    title: 'tooltip',
  },
};

export default meta;
