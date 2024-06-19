import { Meta, StoryObj } from '@storybook/react';
import Steps from './index';

const { Step } = Steps;

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
  args: { current: 1, type: 'navigation' },
  render: (props) => (
    <Steps {...props}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  ),
};

export default meta;
