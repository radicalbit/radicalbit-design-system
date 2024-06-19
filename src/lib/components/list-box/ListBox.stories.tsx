import { Meta, StoryObj } from '@storybook/react';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import ListBox from './index';

const meta: Meta<typeof ListBox> = {
  title: 'Components/ListBox',
  component: ListBox,

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['label', 'message']),
  },
};
type Story = StoryObj<typeof ListBox>;

const mockData = [
  {
    name: 'Environment 1',
    description: 'Environment One',
  },
  {
    name: 'Environment 2',
    description: 'Environment Two',
  },
];

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    content: mockData,
    title: 'Current Environment',
    type: 'list',
    action: 'View full listBox',
  },
};

export default meta;
