import {
  mapReactNodeArgsTypes,
  mapSelectArgsTypes,
} from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Countdown from '.';
import { CountdownProps } from './types';

const meta: Meta<typeof Countdown> = {
  title: 'Components/Countdown',

  component: Countdown,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['label']),
    ...mapSelectArgsTypes([{ title: 'type', options: ['inline', 'labels'] }]),
  },
};

const commonArgs : CountdownProps = {
  label: 'sample label',
  date: new Date().getTime() + 6.048e+8,
  type: 'inline',
};

type Story = StoryObj<typeof Countdown>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  render: (props) => <Countdown {...props}></Countdown>,
};

export default meta;
