import { Meta, StoryObj } from '@storybook/react';
import RbitLogo from '@Images/radicalbit__RGB--glyph.svg?url';
import Button from '../button';
import Void from '.';

const meta: Meta<typeof Void> = {
  title: 'Components/Void',
  component: Void,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof Void>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Empty component',
    description: 'Create something beautiful',
    actions: <Button type="primary">Save</Button>,
    image: <img src={RbitLogo} alt="rbit-logo" />,
  },

  render: (props) => <Void {...props} />,
};

export default meta;
