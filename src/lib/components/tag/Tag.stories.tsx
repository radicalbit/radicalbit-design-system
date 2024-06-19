import { Meta, StoryObj } from '@storybook/react';
import Tag from '.';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,

  tags: ['autodocs'],

  argTypes: {},
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

export default meta;
