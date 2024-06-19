import { Meta, StoryObj } from '@storybook/react';
import { TransferProps } from 'antd';
import { useState } from 'react';
import Transfer, { Props } from '.';

type CustomProps = Props<TransferProps<Record<string, unknown>>>;

const mockData = Array
  .from({ length: 10 })
  .fill(true).map((_, i) => ({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  }));

const meta: Meta<typeof Transfer> = {
  title: 'Components/Transfer',
  component: Transfer,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof Transfer>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    showSearch: true,
    dataSource: mockData,
    titles: ['Source', 'Target'],
    render: (item) => item.title ?? '',
  },
  render: (props) => {
    const [targetKeys, setTargetKeys] = useState(
      mockData.filter((item) => +item.key % 3 > 1).map((item) => item.key)
    );
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    const onChange: CustomProps['onChange'] = (newTargetKeys) => {
      setTargetKeys(newTargetKeys);
    };

    const onSelectedChange: CustomProps['onSelectChange'] = (source, target) => {
      setSelectedKeys([...source, ...target]);
    };

    return (
      <Transfer
        {...props}
        onChange={onChange}
        selectedKeys={selectedKeys}
        targetKeys={targetKeys}
        onSelectChange={onSelectedChange}
      />
    );
  },
};

export const TransfertOperationFlexStart: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    showSearch: true,
    dataSource: mockData,
    titles: ['Source', 'Target'],
    alignOperation: 'flex-start',
    render: (item) => item.title ?? '',
  },
  render: (props) => {
    const [targetKeys, setTargetKeys] = useState(
      mockData.filter((item) => +item.key % 3 > 1).map((item) => item.key)
    );
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    const onChange: CustomProps['onChange'] = (newTargetKeys) => {
      setTargetKeys(newTargetKeys);
    };

    const onSelectedChange: CustomProps['onSelectChange'] = (source, target) => {
      setSelectedKeys([...source, ...target]);
    };

    return (
      <Transfer
        {...props}
        onChange={onChange}
        selectedKeys={selectedKeys}
        targetKeys={targetKeys}
        onSelectChange={onSelectedChange}
      />
    );
  },
};

export default meta;
