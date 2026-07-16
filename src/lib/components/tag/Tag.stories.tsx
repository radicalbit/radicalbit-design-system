import { Meta, StoryObj } from '@storybook/react';
import Tag from '.';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,

  tags: ['autodocs'],

  argTypes: {
    type: {
      control: 'select',
      options: [
        'dashed',
        'dashed-secondary',
        'error',
        'error-light',
        'error-outlined',
        'full',
        'highlighted',
        'primary-outlined',
        'secondary',
        'secondary-light',
        'secondary-outlined',
        'success',
        'success-outlined',
        'text',
        'warning',
        'warning-light',
        'warning-outlined',
      ],
    },
    rounded: { control: 'boolean' },
  },
};
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    modifier: 'c-tag--full',
    children: 'Content',
  },
};

export const WarningOutlinedRounded: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'warning-outlined',
    rounded: true,
    children: 'Publish Requested',
  },
};

export const SuccessOutlinedRounded: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'success-outlined',
    rounded: true,
    children: 'Published in Prod',
  },
};

export const ErrorOutlinedRounded: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'error-outlined',
    rounded: true,
    children: 'Failed',
  },
};

export const PrimaryOutlinedRounded: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'primary-outlined',
    rounded: true,
    children: 'Active',
  },
};

export const SecondaryOutlinedRounded: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'secondary-outlined',
    rounded: true,
    children: 'Draft',
  },
};

export default meta;
