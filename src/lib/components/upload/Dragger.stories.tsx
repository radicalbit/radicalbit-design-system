import { Meta, StoryObj } from '@storybook/react';
import Dragger from './dragger';

const meta: Meta<typeof Dragger> = {
  title: 'Components/Dragger',
  component: Dragger,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof Dragger>;

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
