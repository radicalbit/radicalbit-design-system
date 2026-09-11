import { Meta, StoryObj } from '@storybook/react';
import Resizable from '.';

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

function Top() {
  return (
    <>
      <h1>lorem</h1>
      <h2>lorem</h2>
      <h3>lorem</h3>
      lorem
    </>
  );
}
function Bottom() {
  return <>lorem lorem</>;
}

export const Group: Story = {
  args: {
    top: <Top />,
    bottom: <Bottom />,
  },
};

export default meta;
