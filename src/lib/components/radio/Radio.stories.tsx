import { Meta, StoryObj } from '@storybook/react';
import FormField from '@Lib/components/form-field';
import Radio from '.';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    children: { control: 'text' },
  },
};

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    children: 'Test',
  },
  render: ({ children, ...props }) => (
    <div style={{ width: '100%', height: '100%' }}>
      <Radio {...props}>{children}</Radio>
    </div>
  ),
};

export const DisabledGroupDark: Story = {
  globals: { theme: 'dark' },
  render: () => (
    <FormField label="Notification frequency">
      <Radio.Group
        disabled
        defaultValue="daily"
        options={[
          { value: 'immediate', label: 'Immediate' },
          { value: 'daily', label: 'Daily digest' },
          { value: 'weekly', label: 'Weekly digest' },
        ]}
      />
    </FormField>
  ),
};

export default meta;
