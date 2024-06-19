import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SelectWithText from './select-with-text';

const mockOptions = [
  {
    value: 'First',
    label: 'First',
  },
  {
    value: '2',
    label: 'Second',
  },
  {
    value: '3',
    label: 'Third',
  },
  {
    value: '4',
    label: 'ThirdThird',
  },
  {
    value: '5',
    label: 'Fourth',
  },
];

const meta: Meta<typeof SelectWithText> = {
  title: 'Components/SelectWithText',
  component: SelectWithText,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

type Story = StoryObj<typeof SelectWithText>;

export const Default: Story = {
  args: {
    allowClear: true,
    items: mockOptions,
    notAllowEmptyText: true,
    placeholder: 'Type to search',
    textPlaceholder: 'Type the new element name',
    width: 300,
  },
  render: (props) => {
    const [value, setValue] = useState('Option 1');

    return (
      <div>
        <SelectWithText
          {...props}
          onSelectChange={(value: string) => setValue(value)}
          onTextChange={(value: string) => setValue(value)}
          value={value}
        />
      </div>
    );
  },
};

export default meta;
