import { Meta, StoryObj } from '@storybook/react';
import Radio from './index';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    children: { control: 'text' },
  },
};

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    children: 'Test',
  },
  render: ({ children, ...props }) => (
    <div style={{ width: '100%', height: '100%' }}>
      <Radio {...props}>{children}</Radio>
    </div>
  ),
};

export default meta;
