import { Meta, StoryObj } from '@storybook/react';
import JsonTree from './index';

const meta : Meta<typeof JsonTree> = {
  title: 'Components/JsonTree',

  component: JsonTree,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

const commonArgs = {};

type Story = StoryObj<typeof JsonTree>;

export const Default: Story = {
  args: {
    ...commonArgs,
    data: {
      test: {
        nested: 'nested',
      },
    },
  },
};

export default meta;
