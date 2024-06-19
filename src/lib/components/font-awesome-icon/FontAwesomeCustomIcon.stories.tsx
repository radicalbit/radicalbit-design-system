import FontAwesomeCustomIcon from '@Components/font-awesome-icon/font-awesome-custom-icon';
import Icon from '@Images/icons/rdb-pipe-ico-chart.svg';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FontAwesomeCustomIcon> = {
  title: 'Components/FontAwesomeCustomIcon',
  component: FontAwesomeCustomIcon,

  tags: ['autodocs'],
};
type Story = StoryObj<typeof FontAwesomeCustomIcon>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },

  args: {
    children: <Icon />,
  },
};

export default meta;
