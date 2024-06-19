import type { Meta, StoryObj } from '@storybook/react';
import AbbreviatedNumber from './index';

const meta: Meta<typeof AbbreviatedNumber> = {
  title: 'Components/AbbreviatedNumber',
  component: AbbreviatedNumber,
  parameters: {
    layout: 'centered',
  },
  
  tags: ['autodocs'],

};

type Story = StoryObj<typeof AbbreviatedNumber>;

export const Default: Story = {
  args: {
    value: 10000,
    options: {
      notation: 'compact',
    },
  },
};

export default meta;
