import {
  mapBooleanArgsTypes,
  mapReactNodeArgsTypes,
} from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import AceEditor from 'react-ace';
import CodeWrapper from './index';

const meta: Meta<typeof CodeWrapper> = {
  title: 'Components/CodeWrapper',

  component: CodeWrapper,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['header', 'editor']),
    ...mapBooleanArgsTypes(['readOnly']),
  },
};

const header = (
  <>
    <h1>header</h1>
    <p>this works</p>
  </>
);

const editor = (
  <AceEditor
    theme="solarized_light"
    mode="mode"
    setOptions={{ useWorker: false }}
    highlightActiveLine={false}
    showPrintMargin={false}
    showGutter
    readOnly
    value="value"
    onChange={() => {
      console.log('change');
    }}
    fontSize={14}
  />
);

const commonArgs = {
  header,
  editor,
};

type Story = StoryObj<typeof CodeWrapper>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  render: (props) => <CodeWrapper {...props} />,
};

export default meta;
