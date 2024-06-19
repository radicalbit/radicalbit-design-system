import { Meta, StoryObj } from '@storybook/react';
import { mapBooleanArgsTypes } from '@Src/utils/storybook';
import Skeleton from './index';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapBooleanArgsTypes(['avatar', 'title', 'paragraph']),
  },
};

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    paragraph: true,
    loading: true,
  },

  render: (props) => (
    <div style={{ width: 400 }}>
      <Skeleton {...props} />
    </div>
  ),
};

export default meta;
