import { Meta, StoryObj } from '@storybook/react';
import InputNumber from '.';

const meta: Meta<typeof InputNumber> = {
  title: 'Components/InputNumber',
  component: InputNumber,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  args: {
    placeholder: 'Amount',
  },
  render: (props) => (
    <div style={{ width: 240 }}>
      <InputNumber {...props} />
    </div>
  ),
};

export const WithPrefixDark: Story = {
  globals: { theme: 'dark' },
  args: {
    prefix: '$',
    defaultValue: 10,
    step: 0.5,
  },
  render: (props) => (
    <div
      style={{
        width: 240, display: 'flex', flexDirection: 'column', gap: '1rem',
      }}
    >
      <InputNumber {...props} />
      <InputNumber {...props} placeholder="Empty" defaultValue={undefined} />
      <InputNumber {...props} disabled />
    </div>
  ),
};

export default meta;
