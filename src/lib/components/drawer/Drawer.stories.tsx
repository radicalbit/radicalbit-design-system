import { mapSelectArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Drawer from './index';
import Button from '../button';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapSelectArgsTypes([
      { title: 'placement', options: ['right', 'left', 'top', 'bottom'] },
    ]),
  },
};

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    title: 'Right Drawer',
    placement: 'right',
    closable: false,
  },
  render: (props) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer {...props} open={open} onClose={() => setOpen(false)}>
          <h1>LoremIpsum</h1>
          <p>Lorem</p>
        </Drawer>
      </>
    );
  },
};

export default meta;
