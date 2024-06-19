import {
  mapBooleanArgsTypes,
  mapReactNodeArgsTypes,
} from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Collapse from './index';
import Panel from './panel';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',

  component: Collapse,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['header', 'editor']),
    ...mapBooleanArgsTypes(['readOnly']),
  },
};

const commonArgs = {};

type Story = StoryObj<typeof Collapse>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  render: (props) => (
    <Collapse {...props}>
      <Panel header="This is panel header 1" key={1}>
        <p>Duis</p>
      </Panel>
      <Panel header="This is panel header 2" key={2}>
        <div>
          <p>Lorem</p>
          <Collapse>
            <Panel header="This is panel header 1" key={1}>
              <p>Lorem</p>
            </Panel>
            <Panel header="This is panel header 2" key={2}>
              <p>Lorem</p>
            </Panel>
            <Panel header="This is panel header 3" key={3}>
              <p>Lorem Ipsum</p>
            </Panel>
            <Panel header="This is panel header 3" key={4}>
              <p>Lorem Ipsum</p>
            </Panel>
          </Collapse>
        </div>
      </Panel>
      <Panel header="This is panel header 3" key={3}>
        <p>Lorem Ipsum</p>
      </Panel>
    </Collapse>
  ),
};

export default meta;
