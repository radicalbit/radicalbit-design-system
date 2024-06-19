import { mapSelectArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';
import DrawerList from './index';

const mockData = {
  activeRow: (record: Record<string, unknown>) => record.key === '4',
  columns: [
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Nodes',
      dataIndex: 'nodes',
      key: 'nodes',
    },
    {
      title: 'Analytics',
      dataIndex: 'analytics',
      key: 'analytics',
    },
    {
      title: 'Filters',
      dataIndex: 'filters',
      key: 'filters',
    },
    {
      title: '',
      dataIndex: 'key',
      key: 'key',
      render: () => (
        <div className="w-action">
          <FontAwesomeIcon icon={faEye} />
        </div>
      ),
    },
  ],
  dataSource: [
    {
      key: '4',
      version: 'v.4',
      name: 'Current Version',
      nodes: 14,
      analytics: 22,
      filters: 19,
    },
    {
      key: '3',
      version: 'v.3',
      name: '1 Feb, 2020',
      nodes: 32,
      analytics: 32,
      filters: 20,
    },
    {
      key: '2',
      version: 'v.2',
      name: '1 Jan, 2020',
      nodes: 14,
      analytics: 22,
      filters: 19,
    },
    {
      key: '1',
      version: 'v.1',
      name: '1 Dec, 2019',
      nodes: 32,
      analytics: 32,
      filters: 20,
    },
  ],
};

const meta: Meta<typeof DrawerList> = {
  title: 'Components/DrawerList',
  component: DrawerList,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapSelectArgsTypes([
      { title: 'placement', options: ['right', 'left', 'top', 'bottom'] },
    ]),
  },
};

type Story = StoryObj<typeof DrawerList>;

export const Default: Story = {
  args: {
    header: 'Right DrawerList',
  },
  render: (props) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open DrawerList</Button>
        <DrawerList
          {...props}
          open={open}
          onClose={() => setOpen(false)}
          list={mockData}
        />
      </>
    );
  },
};

export default meta;
