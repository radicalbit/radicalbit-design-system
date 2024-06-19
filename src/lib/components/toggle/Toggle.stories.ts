import { Meta, StoryObj } from '@storybook/react';
import Toggle from '.';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'test',
  },
};

export default meta;
