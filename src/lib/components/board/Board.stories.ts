import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Board from './index';

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
};

type Story = StoryObj<typeof Board>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
