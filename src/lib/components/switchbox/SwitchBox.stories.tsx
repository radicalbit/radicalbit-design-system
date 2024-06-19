import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Switchbox from './index';

const meta: Meta<typeof Switchbox> = {
  title: 'Components/Switchbox',
  component: Switchbox,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof Switchbox>;

export const Default: Story = {
  args: {},
  render: (props) => {
    const [checked, setChecked] = useState(true);
    return <Switchbox {...props} checked={checked} onChange={setChecked} />;
  },
};

export default meta;
