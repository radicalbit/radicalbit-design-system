import { Meta, StoryObj } from '@storybook/react';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import Header from './newHeader';
import { Search } from '../input';
import SectionTitle from '../section-title';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['actions', 'prefix']),
  },
};
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: <SectionTitle subtitle="Subtitle" title="Title" />,
    details: {
      one: <Search placeholder="Search" />,
      two: <Search placeholder="Search" />,
    },
    actions: {
      one: 'Action',
    },
  
  },
  render: (props) => <Header {...props} />,
};

export default meta;
