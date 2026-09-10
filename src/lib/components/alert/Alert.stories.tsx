import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta } from '@storybook/react';
import Alert, { Props } from ".";

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',

  component: Alert,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['message', 'description', 'closeText']),
  },
};

export function Default(props: Props) {
  return <Alert {...props} message="Alert" />;
}

export default meta;
