import {
  mapBooleanArgsTypes,
  mapReactNodeArgsTypes,
} from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Collapse from '.';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',

  component: Collapse,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['header', 'editor']),
    ...mapBooleanArgsTypes(['readOnly']),
  },
};

const commonArgs = {};

type Story = StoryObj<typeof Collapse>;

const nestedItems = [
  { key: '1', label: 'This is panel header 1', children: <p>Lorem</p> },
  { key: '2', label: 'This is panel header 2', children: <p>Lorem</p> },
  { key: '3', label: 'This is panel header 3', children: <p>Lorem Ipsum</p> },
  { key: '4', label: 'This is panel header 3', children: <p>Lorem Ipsum</p> },
];

export const Default: Story = {
  args: {
    ...commonArgs,
    items: [
      { key: '1', label: 'This is panel header 1', children: <p>Duis</p> },
      {
        key: '2',
        label: 'This is panel header 2',
        children: (
          <div>
            <p>Lorem</p>
            <Collapse items={nestedItems} />
          </div>
        ),
      },
      { key: '3', label: 'This is panel header 3', children: <p>Lorem Ipsum</p> },
    ],
  },
  render: (props) => <Collapse {...props} />,
};

export default meta;
