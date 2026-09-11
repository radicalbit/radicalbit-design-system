import { Meta, StoryObj } from '@storybook/react';
import Steps from '.';

const meta: Meta<typeof Steps> = {
  title: 'Components/Steps',
  component: Steps,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  args: {
    current: 1,
    type: 'navigation',
    items: [
      { title: 'Finished', content: 'This is a description.' },
      { title: 'In Progress', content: 'This is a description.' },
      { title: 'Waiting', content: 'This is a description.' },
    ],
  },
  render: (props) => <Steps {...props} />,
};

export default meta;
