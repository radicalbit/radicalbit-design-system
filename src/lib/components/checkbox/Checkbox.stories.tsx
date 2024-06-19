import { mapBooleanArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',

  component: Checkbox,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapBooleanArgsTypes([
      'checked',
      'disabled',
      'autofocus',
      'defaultChecked',
    ]),
  },
};

const commonArgs = {
  checked: true,
  disabled: false,
  autofocus: true,
  defaultChecked: true,
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
