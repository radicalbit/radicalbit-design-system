import { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  
  argTypes: {
    icon: {
      control: 'select',
      options: ['+', '-', null],
    },

    prefix: {
      control: 'select',
      options: ['+', '-', null],
    },

    suffix: {
      control: 'select',
      options: ['+', '-', null],
    },

    type: {
      control: 'select',
      options: ['default', 'primary', 'ghost', 'dashed', 'text', 'secondary-light', 'secondary', 'success', 'error', 'error-light', 'warning', 'warning-light'],
    },

    loading: {
      control: 'boolean',
    },
  },
};

const commonArgs = {
  block: false,
  danger: false,
  loading: false,
  disabled: false,
  icon: null,
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    ...commonArgs,
    children: 'Default',
    type: 'default',
  },
};

export const Primary: Story = {
  args: {
    ...commonArgs,
    children: 'Primary',
    type: 'primary',
  },
};

export const Ghost: Story = {
  args: {
    ...commonArgs,
    children: 'Ghost',
    type: 'ghost',
  },
};

export const Dashed: Story = {
  args: {
    ...commonArgs,
    children: 'Dashed',
    type: 'dashed',
  },
};

export const Text: Story = {
  args: {
    ...commonArgs,
    children: 'Text',
    type: 'text',
  },
};

export default meta;
