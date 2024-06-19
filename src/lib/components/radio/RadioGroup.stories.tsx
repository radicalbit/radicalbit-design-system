import { Meta, StoryObj } from '@storybook/react';
import Button from './button';
import Group from './group';
import Radio from '.';

const meta: Meta<typeof Group> = {
  title: 'Components/Radio.Group',
  component: Group,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
  },
};

type Story = StoryObj<typeof Button>;

export const WithRadio: Story = {
  args: {},
  render: () => {
    const { Group } = Radio;
    return (
      <Group defaultValue="Two">
        <Radio value="One">First Radio</Radio>
        <Radio value="Two">Second Radio</Radio>
        <Radio value="Three">Third Radio</Radio>
      </Group>
    );
  },
};

export const WithButtons: Story = {
  args: { },

  render: (props) => (
    <Group defaultValue="One" {...props}>
      <Button value="One">
        First Button
      </Button>
      <Button value="Two">
        Second Button
      </Button>
      <Button value="Three">
        Third Button
      </Button>
    </Group>
  ),
};
export default meta;
