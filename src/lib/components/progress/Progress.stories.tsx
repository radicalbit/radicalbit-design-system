import { Meta, StoryObj } from '@storybook/react';
import Progress from './index';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: { percent: 65, type: 'circle' },

  render: (props) => (
    <div style={{ width: '200px', height: '150px' }}>
      <Progress {...props} />
    </div>
  ),
};

export default meta;
