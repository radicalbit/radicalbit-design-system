import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Popconfirm from './index';
import FontAwesomeIcon from '../font-awesome-icon';

const meta: Meta<typeof Popconfirm> = {
  title: 'Components/Popconfirm',
  component: Popconfirm,
  parameters: {
    layout: 'centered',
  },
  
  tags: ['autodocs'],
 
  argTypes: {
    ...mapReactNodeArgsTypes(['title']),
    icon: {
      options: ['example1', 'example2'],
      mapping: {
        example1: <FontAwesomeIcon icon={faCheck} />,
        example2: <FontAwesomeIcon icon={faTimes} />,
      },
    },
  },
};

type Story = StoryObj<typeof Popconfirm>;

export const Default: Story = {
  args: { label: 'Click me' },
  
};

export default meta;
