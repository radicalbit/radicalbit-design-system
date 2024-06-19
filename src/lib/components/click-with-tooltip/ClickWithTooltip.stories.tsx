import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import ClickWithTooltip from '.';

const meta: Meta<typeof ClickWithTooltip> = {
  title: 'Components/ClickWithTooltip',

  component: ClickWithTooltip,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['tooltipTitle']),
  },
};

const commonArgs = {
  tooltipTitle: 'sample title',
};

type Story = StoryObj<typeof ClickWithTooltip>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  render: (props) => (
    <ClickWithTooltip {...props}>
      <div>hover me to see tooltip</div>
    </ClickWithTooltip>
  ),
};

export default meta;
