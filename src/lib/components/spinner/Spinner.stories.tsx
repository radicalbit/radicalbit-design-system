import { Meta, StoryObj } from '@storybook/react';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import Spinner from '.';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['tip', 'indicator']),
  },
};

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    spinning: true,
  },

  render: (props) => <Spinner {...props}>Content</Spinner>,
};

export const FormWrapperDark: Story = {
  globals: { theme: 'dark' },
  args: {
    spinning: true,
    isFormWrapper: true,
    tip: 'Saving alert...',
  },

  render: (props) => (
    <div style={{ width: 360 }}>
      <Spinner {...props}>
        <div>Step 1 of 3</div>

        <div>Choose the metric and the threshold that trigger the alert.</div>
      </Spinner>
    </div>
  ),
};

export default meta;
