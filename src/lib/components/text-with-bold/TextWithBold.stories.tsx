import { Meta, StoryObj } from '@storybook/react';
import TextWithBold from '.';

const meta: Meta<typeof TextWithBold> = {
  title: 'Components/TextWithBold',
  component: TextWithBold,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof TextWithBold>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'text',
    bold: 'bold',
    isQuestion: true,
  },
};

export const Types: Story = {
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
      <TextWithBold bold="lucataglia-key" text="Credential" textProps={{ type: 'secondary' }} />
      <TextWithBold bold="200" boldProps={{ type: 'success' }} text="Status" textProps={{ type: 'secondary' }} />
      <TextWithBold bold="at 75%" boldProps={{ type: 'warning' }} text="Limit" textProps={{ type: 'secondary' }} />
      <TextWithBold bold="429 · RequestRateLimitExceeded" boldProps={{ type: 'error' }} text="Status" textProps={{ type: 'secondary' }} />
      <TextWithBold bold={<a href="#credentials">lucataglia-key</a>} text="Credential" textProps={{ type: 'secondary' }} />
    </div>
  ),
};

export default meta;
