import { faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import Node, { Props } from './index';

const meta: Meta<typeof Node> = {
  title: 'Components/Node',

  component: Node,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {

  },
};

const commonArgs: Props = {
  label: 'Kafka Source',
  topRight: <FontAwesomeIcon icon={faTimes} />,
  content: <FontAwesomeIcon icon={faSignInAlt} />,
  modifier: 'm-node--radius',
  actions: 'x',
};

type Story = StoryObj<typeof Node>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
