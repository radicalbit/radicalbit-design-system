import { Meta, StoryObj } from '@storybook/react';
import DescriptionList from './index';

const meta: Meta<typeof DescriptionList> = {
  title: 'Components/DescriptionList',
  component: DescriptionList,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof DescriptionList>;

export const Default: Story = {
  args: {
    list: [{ title: 'title', value: 'value' }],
    gridColumnCount: 2,
    noMargin: false,
    withBorder: false,
  },
};

export default meta;
