import { Meta, StoryObj } from '@storybook/react';
import { Tree } from 'antd';
import { DataNode } from 'antd/es/tree';
import { Props as TreeProps } from '@Components/tree';

const mockData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1677ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

const meta: Meta<typeof Tree> = {
  title: 'Components/Tree',
  component: Tree,

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<TreeProps>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    treeData: mockData,
  },

  render: ({ treeData }) => {
    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
      console.log('selected', selectedKeys, info);
    };
  
    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
      console.log('onCheck', checkedKeys, info);
    };
  
    return (
      <Tree
        checkable
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
      />
    );
  },
};

export default meta;
