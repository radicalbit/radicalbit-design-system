import { Meta, StoryObj } from '@storybook/react';
import { faAbacus } from '@fortawesome/free-solid-svg-icons';
import Menu from './index';
import FontAwesomeIcon from '../font-awesome-icon';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',

  component: Menu,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
  
  },
};

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    items: [{
      title: 'Menu',
      label: 'Menu',
      key: 'menu',
      icon: <FontAwesomeIcon icon={faAbacus} />,
    }],
  },

};

export default meta;
