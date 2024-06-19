import { Meta, StoryObj } from '@storybook/react';
import Button from '../button';
import message from './index';

const success = () => {
  message.success('Message Success');
};

const info = () => {
  message.info('Message Info');
};

const warning = () => {
  message.warning('Message Warning');
};

const error = () => {
  message.error('Message Error');
};

const loading = () => {
  message
    .loading('Action in progress..', 1.5)
    .then(() => message.success('Loading finished', 1))
    .then(() => message.info('Loading finished is finished', 2.5));
};

const meta: Meta = {
  title: 'Components/Message',

  component: () => (
    <div style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
      <Button onClick={success}>Click me success</Button>
      <Button onClick={warning}>Click me waning</Button>
      <Button onClick={info}>Click me info</Button>
      <Button onClick={error}>Click me error</Button>
      <Button onClick={loading}>Click me loading</Button>
    </div>
  ),

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
  },
};

const commonArgs = {};

type Story = StoryObj;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
