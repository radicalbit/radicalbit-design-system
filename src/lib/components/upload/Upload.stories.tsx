import { Meta, StoryObj } from '@storybook/react';
import Button from '../button';
import Upload from '.';

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof Upload>;

export const Select: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    behavior: 'hide-button',
    beforeUpload: () => false,
    children: (
      <Button type="default">
        Import
      </Button>
    ),
  },
};

export const Drag: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    beforeUpload: () => false,
    children: (
      <div style={{ height: 200, width: 200 }}>
        Drag here a file
      </div>
    ),
  },
};

export default meta;
