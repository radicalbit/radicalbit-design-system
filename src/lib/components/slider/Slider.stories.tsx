import { Meta, StoryObj } from '@storybook/react';
import Slider from './index';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {

  },
};

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {},
  render: (props) => (
    <div style={{ width: 400, height: 400 }}>
      <Slider {...props} />
    </div>
  ),
};

export default meta;
