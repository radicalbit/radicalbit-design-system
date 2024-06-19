import { Meta, StoryObj } from '@storybook/react';
import SmartImg from './index';

const meta: Meta<typeof SmartImg> = {
  title: 'Components/SmartImg',
  component: SmartImg,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

type Story = StoryObj<typeof SmartImg>;

export const Default: Story = {
  args: {
    src: 'https://radicalbit.ai/wp-content/uploads/2023/11/radicalbit__RGB__logo-horizontal-positive-e1701861883280.webp',
  },

  render: (props) => (
    <div style={{ width: 100 }}>
      <SmartImg {...props} />
    </div>
  ),
};

export default meta;
