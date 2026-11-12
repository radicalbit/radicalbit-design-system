import { Meta, StoryObj } from '@storybook/react';
import Timeline, { TimelineItem } from '.';
import Tag from '../tag';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof Timeline>;

const step = (type: string, fields: string[], blocking = false) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '.375rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
      <strong style={{ fontFamily: 'var(--coo-monospace-font)' }}>{type}</strong>
      {blocking && <Tag type="error">blocking</Tag>}
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.25rem' }}>
      {fields.map((field) => <Tag key={field} type="secondary">{field}</Tag>)}
    </div>
  </div>
);

const stepByStep: TimelineItem[] = [
  {
    key: '1', title: '0 ms', tone: 'neutral', content: step('MODEL_INVOCATION', ['modelId gpt-4o-mini', 'modelType chat_completions', 'isJudge true']),
  },
  {
    key: '2', title: '164 ms', tone: 'muted', content: step('INPUT_TOKEN_PROCESSED', ['value 298', 'cost <$0.0001', 'modelId gpt-4o-mini']),
  },
  {
    key: '3', title: '164 ms', tone: 'muted', content: step('OUTPUT_TOKEN_PROCESSED', ['value 14', 'cost <$0.0001', 'modelId gpt-4o-mini']),
  },
  {
    key: '4', title: '171 ms', tone: 'error', content: step('GUARDRAIL', ['guardrailName prompt-injection', 'guardrailWhere input', 'guardrailBehavior BLOCK'], true),
  },
  {
    key: '5', title: '182 ms', tone: 'error', content: step('response', ['requestStatus handled_error', 'httpStatusCode 400', 'errorType GuardrailBadRequest']),
  },
];

export const StepByStep: Story = {
  args: {
    items: stepByStep,
    mode: 'start',
    titleSpan: '72px',
  },
  render: (props) => (
    <div style={{ width: '560px' }}>
      <Timeline {...props} />
    </div>
  ),
};

export const Tones: Story = {
  args: {
    items: (['primary', 'success', 'warning', 'error', 'muted', 'neutral'] as const).map((tone) => ({
      key: tone,
      title: tone,
      tone,
      content: `${tone} tone`,
    })),
    mode: 'start',
  },
};

export default meta;
