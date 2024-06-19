import { Meta, StoryObj } from '@storybook/react';
import TextWithBold from '.';

const meta: Meta<typeof TextWithBold> = {
  title: 'Components/TextWithBold',
  component: TextWithBold,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof TextWithBold>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'text',
    bold: 'bold',
    isQuestion: true,
  },
};

export default meta;
