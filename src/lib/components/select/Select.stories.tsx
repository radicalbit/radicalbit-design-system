import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Select, { Option } from './index';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

type Story = StoryObj<typeof Select>;

const mockOptions = [
  {
    value: 'Option 1',
    label: 'Option 1',
  },
  {
    value: 'Option 2',
    label: 'Option 2',
  },
  {
    value: 'Option 3',
    label: 'Option 3',
  },
  {
    value: 'Option 4',
    label: 'Option 4',
  },
];

export const Default: Story = {
  args: {},
  render: (props) => {
    const [value, setValue] = useState('Option 1');

    const options = mockOptions.map((item, index: number) => (
      <Option value={item.value} key={index}>
        {item.label}
      </Option>
    ));

    return (
      <Select {...props} value={value} onChange={(v) => setValue(v)}>
        {options}
      </Select>
    );
  },
};

export default meta;
