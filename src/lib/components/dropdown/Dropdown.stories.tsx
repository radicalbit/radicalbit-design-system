import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '.';

const menu = {
  items: [
    { key: '1', label: 'Save Layout' },
    { key: '2', label: 'Delete Dashboard' },
    { type: 'divider' as const },
    { key: '3', label: 'Add Widget' },
    { key: '4', label: 'Danger Item', danger: true },
  ],
};

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {},
  render: (props) => (
    <Dropdown {...props} menu={menu}>
      <a>Hover me</a>
    </Dropdown>
  ),
};

export default meta;
