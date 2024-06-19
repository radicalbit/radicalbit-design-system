import { Meta, StoryObj } from '@storybook/react';
import Popover from './index';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: { title: 'LoremIpsum', content: 'Lorem', children: 'hover me' },
};

export default meta;
