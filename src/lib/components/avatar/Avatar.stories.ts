import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Avatar from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',

  component: Avatar,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['icon', 'src']),
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large'],
      },
    },
  },

};

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    icon: 'R',
  },
};

export default meta;
