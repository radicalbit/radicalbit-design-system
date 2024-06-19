import { Meta, StoryObj } from '@storybook/react';
import SectionTitle from './index';

const meta: Meta<typeof SectionTitle> = {
  title: 'Components/SectionTitle',
  component: SectionTitle,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },

  args: {
    title: 'Title',
    subtitle: 'subtitle',
  },

  render: (props) => (
    <div style={{ width: 200 }}>
      <SectionTitle {...props} />
    </div>
  ),
};

export default meta;
