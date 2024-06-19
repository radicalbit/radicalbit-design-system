import { Meta, StoryObj } from '@storybook/react';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import FormField from './index';
import { Input } from '../input';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['label', 'message']),
  },
};
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (props) => (
    <FormField {...props}>
      <Input />
    </FormField>
  ),
  args: {},
};

export default meta;
