import { Meta, StoryObj } from '@storybook/react';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import CopyToClipboard from './index';

const meta: Meta<typeof CopyToClipboard> = {
  title: 'Components/CopyToClipboard',

  component: (props) => <CopyToClipboard {...props} />,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

const commonArgs = {
  link: 'string',
  actionHint: 'Oncopied callback',
  icon: Icons.faInfoCircle,
  onCopied: () => console.log('Copied'),
};

type Story = StoryObj<typeof CopyToClipboard>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export default meta;
