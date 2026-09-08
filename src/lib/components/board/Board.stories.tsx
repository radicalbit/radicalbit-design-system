import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Board from './index';
import Button from '../button';

const meta: Meta<typeof Board> = {
  title: 'Components/Board',
  component: Board,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['footer', 'header', 'main', 'secondary']),

    onClick: {
      action: 'clicked',
    },

    backgroundImage: {
      control: 'select',
      options: ['testImage1', 'testImage2', null],
      mapping: {
        testImage1: 'https://picsum.photos/id/110/500/200?blur',
        testImage2: 'https://picsum.photos/id/119/500/200?blur',
      },

    },
  },
};

const commonArgs = {
  width: '500px',
  height: '200px',
  header: 'Board header',
  main: 'The main slot holds the content of the board.',
  footer: <Button size="small" type="primary">Confirm</Button>,
};

type Story = StoryObj<typeof Board>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export const WithSecondary: Story = {
  args: {
    ...commonArgs,
    secondary: 'Secondary slot',
  },
};

export const Types: Story = {
  args: commonArgs,
  render: (props) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {(['primary', 'primary-light', 'secondary', 'secondary-light', 'error', 'rounded'] as const).map((type) => (
        <Board {...props} key={type} type={type} header={type} width="240px" height="120px" />
      ))}
    </div>
  ),
};

export const Statuses: Story = {
  args: commonArgs,
  render: (props) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {(['default', 'active', 'unactive', 'disabled', 'in-evidence'] as const).map((status) => (
        <Board {...props} key={status} status={status} header={status} width="240px" height="120px" />
      ))}
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    ...commonArgs,
    header: 'Hover and click me',
    hoverType: 'primary',
  },
};

export default meta;
