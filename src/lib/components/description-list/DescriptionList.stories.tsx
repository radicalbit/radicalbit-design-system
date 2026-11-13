import { Meta, StoryObj } from '@storybook/react';
import Json from '../json';
import DescriptionList from '.';

const meta: Meta<typeof DescriptionList> = {
  title: 'Components/DescriptionList',
  component: DescriptionList,
  parameters: {
    layout: 'padded',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof DescriptionList>;

export const Inline: Story = {
  args: {
    items: [
      { title: 'model', value: 'jevmisc/decide-plain' },
      { title: 'state', value: 'My card was charged twice' },
      { title: 'answer', value: 'refund' },
      { title: 'request_uuid', value: '5c0190d5-0919-4cf2-a214-01d788425458' },
    ],
  },
};

export const Stacked: Story = {
  args: {
    columns: 5,
    items: [
      { title: 'Duration', value: '4.68 ms' },
      { title: 'Share', value: '36% of trace' },
      { title: 'Tokens', value: '1 in · 1 out' },
      { title: 'Errors', value: 0 },
      { title: 'Created', value: '2026-11-02 13:52:00' },
    ],
    layout: 'stacked',
  },
};

export const WithBorder: Story = {
  args: {
    ...Inline.args,
    withBorder: true,
  },
};

export const NestedJson: Story = {
  args: {
    items: [
      { title: 'decision.mode', value: 'choice' },
      {
        title: 'decision.questions',
        value: <Json data={{ intent: { type: 'choice', criteria: { refund: 'Wants money back' } } }} expandUntil={1} />,
      },
    ],
  },
};

export default meta;
