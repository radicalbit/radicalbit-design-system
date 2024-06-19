import { Meta, StoryObj } from '@storybook/react';
import Tabs, { TabPane } from '.';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    defaultActiveKey: '1',
  },
  render: (props) => (
    <Tabs {...props}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" disabled key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  ),
};

export default meta;
