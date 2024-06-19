import { Meta, StoryObj } from '@storybook/react';
import StatusSelector from './index';

const mockStatus = {
  current: 'Published',
  items: [
    {
      text: 'Published',
      value: 'published',
    },
    {
      text: 'Draft',
      value: 'draft',
    },
  ],
};

const meta: Meta<typeof StatusSelector> = {
  title: 'Components/StatusSelector',
  component: StatusSelector,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof StatusSelector>;

export const Default: Story = {
  args: { title: 'Status', status: mockStatus },
};

export default meta;
