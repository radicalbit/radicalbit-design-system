import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta } from '@storybook/react';
import BarChart, { Props } from '.';

const meta: Meta<typeof BarChart> = {
  title: 'Components/BarChart',

  component: BarChart,

  parameters: {
    layout: 'centered',
    
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['content', 'labels']),
  },
};

export function Default({
  value = 75,
  content = 75,
  labels = ['min', 'max'], ...args
}: Props) {
  return (
    <div style={{ width: '500px' }}>
      <BarChart value={value} content={content} labels={labels} {...args} />
    </div>
  );
}

const SPANS = [
  { name: 'decision_model.workflow', offset: 0, value: 100 },
  { name: 'auth_api_key.task', offset: 0, value: 28 },
  { name: 'check_route_access.task', offset: 28, value: 27 },
  { name: 'decide.task', offset: 55, value: 36 },
  {
    name: 'judge.task', offset: 40, type: 'error' as const, value: 30,
  },
];

export function Waterfall() {
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', gap: '1rem', width: '500px',
      }}
    >
      {SPANS.map((span) => (
        <BarChart key={span.name} labels={[span.name]} offset={span.offset} reverse type={span.type} value={span.value} />
      ))}
    </div>
  );
}

export default meta;
