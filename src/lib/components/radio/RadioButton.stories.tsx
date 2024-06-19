import { Meta, StoryObj } from '@storybook/react';
import Button from './button';
import Group from './group';

const meta: Meta<typeof Button> = {
  title: 'Components/Radio.Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    children: { control: 'text' },
  },
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Test',
  },
  render: ({ children, ...props }) => (
    <Group>
      <Button {...props}>{children}</Button>
    </Group>
    
  ),

};
export default meta;
