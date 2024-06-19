import { Meta, StoryObj } from '@storybook/react';
import MapMarker, { Props } from './index';

const meta: Meta<typeof MapMarker> = {
  title: 'Components/MapMarker',

  component: MapMarker,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
  
  },
};

const commonArgs: Props = {
  type: 'cluster',
  width: '3rem',
  height: '3rem',
};

type Story = StoryObj<typeof MapMarker>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  render: (props) => <MapMarker {...props}>5</MapMarker>,
};

export default meta;
