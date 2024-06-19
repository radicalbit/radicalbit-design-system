import { mapSelectArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from '@Lib/components/modal';
import Button from '@Lib/components/button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapSelectArgsTypes([
    ]),
  },
};

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: 'Modal',
  },
  render: (props) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...props} open={open} onOk={console.debug} onCancel={() => setOpen(false)}>
          <h1>LoremIpsum</h1>
          <p>Lorem</p>
        </Modal>
      </>
    );
  },
};

export const ModalMaximizable: Story = {
  args: {
    title: 'Modal Maximizable',
    maximizable: true,
  },
  render: (props) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...props} open={open} onOk={console.debug} onCancel={() => setOpen(false)}>
          <h1>LoremIpsum</h1>
          <p>Lorem</p>
        </Modal>
      </>
    );
  },
};

export default meta;
