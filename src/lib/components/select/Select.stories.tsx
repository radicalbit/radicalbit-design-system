import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '@Lib/components/button';
import FormField from '@Lib/components/form-field';
import { Input } from '@Lib/components/input';
import RbitModal from '@Lib/components/rbit-modal';
import Select from '.';

const { Option } = Select;

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

const keyOptions = ['po-demo', 'po-staging', 'po-production', 'mmpo-demo'].map((value) => ({
  value,
  label: value,
}));

export const MultipleWithSearch: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Select
        mode="multiple"
        showSearch
        allowClear
        placeholder="Type po-demo"
        options={keyOptions}
        modifier="c-select--w100p"
      />
    </div>
  ),
};

export const MultipleWithSearchDark: Story = {
  ...MultipleWithSearch,
  globals: { theme: 'dark' },
};

export const InRbitModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <RbitModal
          open={open}
          onCancel={() => setOpen(false)}
          header="Create key"
          actions={<Button type="primary" onClick={() => setOpen(false)}>Save</Button>}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <FormField label="Environment">
              <Select options={keyOptions} modifier="c-select--w100p" placeholder="Pick one" />
            </FormField>

            <FormField label="Shared with">
              <Select
                mode="multiple"
                showSearch
                options={keyOptions}
                modifier="c-select--w100p"
                placeholder="Pick many"
              />
            </FormField>

            <FormField label="Name">
              <Input />
            </FormField>
          </div>
        </RbitModal>
      </>
    );
  },
};

export default meta;
