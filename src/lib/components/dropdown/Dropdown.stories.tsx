import { Meta, StoryObj } from '@storybook/react';
import { Menu } from 'antd';
import Dropdown from './index';

const menu = () => (
  <Menu>
    <Menu.Item>Save Layout</Menu.Item>
    <Menu.Item>Delete Dashboard</Menu.Item>
    <Menu.Divider />
    <Menu.Item>Add Widget</Menu.Item>
    <Menu.Item danger>Danger Item</Menu.Item>
  </Menu>
);

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
    <>
      <Dropdown {...props} overlay={menu}>
        <a>Hover me</a>
      </Dropdown>
    </>
  ),
};

export default meta;
