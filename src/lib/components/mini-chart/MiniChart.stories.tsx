import { Meta, StoryObj } from '@storybook/react';
import BarChart from '../bar-chart';
import MiniChart, { Props } from './index';

const meta: Meta<typeof MiniChart> = {
  title: 'Components/MiniChart',

  component: MiniChart,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {

  },
};

const commonArgs: Props = {
  left: 'text-left',
  right: 'text-right',
  chart: <BarChart value={50} content="50" />,
};

type Story = StoryObj<typeof MiniChart>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
