import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Pin, { Props } from './index';

const meta: Meta<typeof Pin> = {
  title: 'Components/Pin',

  component: Pin,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['label']),
  },
};

const commonArgs: Props = { type: 'filled' };

type Story = StoryObj<typeof Pin>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
