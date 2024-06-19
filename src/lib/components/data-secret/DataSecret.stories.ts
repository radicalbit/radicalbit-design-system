import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import DataSecret from './index';

const meta: Meta<typeof DataSecret> = {
  title: 'Components/DataSecret',
  component: DataSecret,
  parameters: {
    layout: 'centered',
  },
  
  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['label']),
  },
};

type Story = StoryObj<typeof DataSecret>;

export const Default: Story = {
  args: {
    data: 'Hidden Data',
  },
};

export default meta;
