import { Meta, StoryObj } from '@storybook/react';
import Truncate from '.';

const meta: Meta<typeof Truncate> = {
  title: 'Components/Truncate',
  component: Truncate,

  tags: ['autodocs'],

  argTypes: {
    suffix: { control: 'text' },
  },
};
type Story = StoryObj<typeof Truncate>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    children:
      'Very long sentence that I want to truncate, i do not know if this is working but i know that there is a suffix',
  },
  render: (props) => (
    <div
      style={{
        width: 200, padding: 6, border: '1px solid grey', borderRadius: 16,
      }}
    >
      <Truncate {...props} />
    </div>
  ),
};

export default meta;
