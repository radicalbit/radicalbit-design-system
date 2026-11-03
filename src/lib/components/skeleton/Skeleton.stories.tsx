import { Meta, StoryObj } from '@storybook/react';
import { mapBooleanArgsTypes } from '@Src/utils/storybook';
import Skeleton from '.';

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

export const OnSurfacesDark: Story = {
  globals: { theme: 'dark' },
  args: {
    active: true,
    avatar: true,
    paragraph: true,
    loading: true,
  },

  render: (props) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {['var(--coo-bk-lv1)', 'var(--coo-bk-lv2)'].map((background) => (
        <div key={background} style={{ width: 400, padding: '1rem', background }}>
          <Skeleton {...props} />
          <Skeleton.Input active block />
        </div>
      ))}
    </div>
  ),
};

export default meta;
