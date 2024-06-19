import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Switch from './index';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
  render: (props) => {
    const [checked, setChecked] = useState(true);
    return <Switch {...props} checked={checked} onChange={setChecked} />;
  },
};

export default meta;
