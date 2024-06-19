import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Card from './index';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  
  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['title', 'extra', 'cardCover', 'actions']),
  },
};

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};

export default meta;
