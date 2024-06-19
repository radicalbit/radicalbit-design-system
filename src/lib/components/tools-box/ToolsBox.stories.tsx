import {
  faChartBar,
  faGripVertical,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { mock } from './mock';
import ToolsBox from '.';

const meta: Meta<typeof ToolsBox> = {
  title: 'Components/ToolsBox',
  component: ToolsBox,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof ToolsBox>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    top: <FontAwesomeIcon icon={faGripVertical} />,
    header: [
      <FontAwesomeIcon icon={faSignInAlt} />,
      <FontAwesomeIcon icon={faChartBar} />,
    ],
    body: mock,
    footer: 'powered by design-system',
  },
};

export default meta;
