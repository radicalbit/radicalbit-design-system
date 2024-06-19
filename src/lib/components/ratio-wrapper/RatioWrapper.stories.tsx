import { Meta, StoryObj } from '@storybook/react';
import RatioWrapper from './index';

const meta: Meta<typeof RatioWrapper> = {
  title: 'Components/RatioWrapper',
  component: RatioWrapper,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof RatioWrapper>;

export const Group: Story = {
  args: {
    modifier: 'l-ratio-wrapper--16-9',
  },
  render: (props) => (
    <RatioWrapper {...props}>
      <div style={{ backgroundColor: 'red' }} className="h-100">
        ciao
      </div>
    </RatioWrapper>
  ),
};

export default meta;
