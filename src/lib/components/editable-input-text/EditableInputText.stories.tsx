import { Meta, StoryObj } from '@storybook/react';
import EditableInputText from './index';

const meta: Meta<typeof EditableInputText> = {
  title: 'Components/EditableInputText',
  component: EditableInputText,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {

  },
};

type Story = StoryObj<typeof EditableInputText>;

export const Default: Story = {
  args: {},
  render: (props) => (
    <EditableInputText
      {...props}
      onBlur={(value) => console.debug(`value '${value}'`)}
      onPressEnter={(e) => console.log(e)}
      autoFocus

    />
  ),
};

export default meta;
