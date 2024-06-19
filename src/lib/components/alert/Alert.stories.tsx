import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta } from '@storybook/react';
import Alert, { Props } from './index';

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

export const Default = (props: Props) => <Alert {...props} message="Alert" />;

export default meta;
