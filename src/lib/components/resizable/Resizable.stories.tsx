import { Meta, StoryObj } from '@storybook/react';
import Resizable from './index';

const meta: Meta<typeof Resizable> = {
  title: 'Components/Resizable',
  component: Resizable,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof Resizable>;

const Top = () => (
  <>
    <h1>lorem</h1>
    <h2>lorem</h2>
    <h3>lorem</h3>
    lorem
  </>
);
const Bottom = () => <>lorem lorem</>;

export const Group: Story = {
  args: {
    top: <Top />,
    bottom: <Bottom />,
  },
};

export default meta;
