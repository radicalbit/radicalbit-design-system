import { Meta, StoryObj } from '@storybook/react';
import Search from './index';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  
  tags: ['autodocs'],

};

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export default meta;
