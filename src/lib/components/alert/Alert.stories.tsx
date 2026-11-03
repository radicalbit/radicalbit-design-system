import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Button from '@Lib/components/button';
import Alert, { Props } from '.';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',

  component: Alert,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['message', 'description', 'closeText']),
  },
};

type Story = StoryObj<typeof Alert>;

export function Default(props: Props) {
  return <Alert {...props} message="Alert" />;
}

const types = ['info', 'success', 'warning', 'error'] as const;

function AllTypesRender() {
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', gap: '1rem', width: 520,
      }}
    >
      {types.map((type) => (
        <Alert
          key={type}
          type={type}
          showIcon
          message={`${type[0].toUpperCase()}${type.slice(1)} alert`}
          description={(
            <ul>
              <li>
                The key
                {' '}
                <code>po-demo</code>
                {' '}
                already exists
              </li>
              <li>Two rows will be skipped</li>
            </ul>
          )}
          action={<Button size="small">Review</Button>}
        />
      ))}
    </div>
  );
}

export const AllTypes: Story = {
  render: AllTypesRender,
};

export const AllTypesDark: Story = {
  globals: { theme: 'dark' },
  render: AllTypesRender,
};

export default meta;
