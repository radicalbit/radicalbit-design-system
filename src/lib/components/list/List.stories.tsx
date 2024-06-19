import { Meta, StoryObj } from '@storybook/react';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import List from './index';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['label', 'message', 'type']),
  },
};
type Story = StoryObj<typeof List>;

const data = [
  ['Name', 'Jane'],
  ['Last Name', 'Doe'],
  ['Age', '30'],
];

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (props) => (
    <div style={{ width: 200 }}>
      <List
        {...props}
        dataSource={data}
        renderItem={([key, value]: string[]) => (
          <List.Item key={key}>
            <div style={{}}>{key}</div>

            <strong>{value}</strong>
          </List.Item>
        )}
      />
    </div>
  ),
  args: {},
};

export default meta;
