import { Meta, StoryObj } from '@storybook/react';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import Header from './newHeader';
import { Search } from '../input';
import SectionTitle from '../section-title';
import Switch from '../switch';

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

export const LongTitleWithSwitch: Story = {
  args: {
    title: (
      <SectionTitle
        subtitle="Subtitle"
        title="A very long alert title that should be truncated with an ellipsis instead of pushing the details out of the header"
      />
    ),
    details: {
      one: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
          <Switch checked />
          <div>Enabled</div>
        </div>
      ),
    },
  },
  render: (props) => (
    <div style={{ width: 600 }}>
      <Header {...props} />
    </div>
  ),
};

export default meta;
