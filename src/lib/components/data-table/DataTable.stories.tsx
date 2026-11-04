import { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    pagination: false,
    dataSource: [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
    ],
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ],
  },
};

const rows = Array.from({ length: 42 }, (_, i) => ({
  key: `${i + 1}`,
  name: `User ${i + 1}`,
  age: 20 + (i % 30),
  address: `${i + 1} Downing Street`,
}));

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export const PaginationDark: Story = {
  globals: { theme: 'dark' },
  render: () => (
    <DataTable
      dataSource={rows}
      columns={columns}
      pagination={{ pageSize: 10, showSizeChanger: true }}
    />
  ),
};

export const ScrollableDark: Story = {
  globals: { theme: 'dark' },
  render: () => (
    <div style={{ width: 480, height: 240, overflow: 'auto' }}>
      <DataTable dataSource={rows} columns={columns} pagination={false} />
    </div>
  ),
};

export default meta;
