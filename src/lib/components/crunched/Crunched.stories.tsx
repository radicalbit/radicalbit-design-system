import { Meta, StoryObj } from '@storybook/react';
import Crunched, { CrunchedProps } from './index';

const meta: Meta<typeof Crunched> = {
  title: 'Components/Crunched',

  component: Crunched,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
  },
};

const commonArgs: CrunchedProps = {
  type: 'success',
  text: 'hello crunched',
};

type Story = StoryObj<typeof Crunched>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
