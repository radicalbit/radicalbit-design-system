import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DraggableDataTable from '.';

const meta: Meta<typeof DraggableDataTable> = {
  title: 'Components/DraggableDataTable',
  component: DraggableDataTable,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof DraggableDataTable>;

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
      {
        key: '3',
        name: 'Ester',
        age: 42,
        address: '10 Downing Street',
      },
      {
        key: '4',
        name: 'Sara',
        age: 56,
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
  render: ({ dataSource, ...args }) => {
    const [data, setData] = useState(dataSource);

    return (
      <DraggableDataTable
        {...args}
        dataSource={data}
        onMoveRowCallback={(updatedData) => {
          console.log('move');
          setData(updatedData);
        }}
      />
    );
  },
};

export default meta;
