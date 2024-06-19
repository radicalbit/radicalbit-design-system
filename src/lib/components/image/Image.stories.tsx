import { Meta, StoryObj } from '@storybook/react';
import Logo from '@Images/rdb/RDB-negaLogo.png';
import Image from '.';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },

  args: {
    src: Logo,
  },
};

export default meta;
