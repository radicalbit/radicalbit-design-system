import { faBug, faFrown, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../button';
import notification, { NotificationConfig } from './index';

const meta: Meta<NotificationConfig> = {
  title: 'Components/Notification',

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    type: { control: 'select', options: ['error', 'running', 'completed', 'success'] },
    message: { control: 'text' },
    description: { control: 'text' },
    icon: {
      control: 'select',
      description: 'ReactNode',
      options: ['smile', 'bug', 'frown'],
      mapping: {
        smile: <FontAwesomeIcon icon={faSmile} size="xs" />,
        bug: <FontAwesomeIcon icon={faBug} size="xs" />,
        frown: <FontAwesomeIcon icon={faFrown} size="xs" />,
      },
    },
    placement: {
      control: 'select',
      options: ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'],
    },
    key: { control: 'text' },
  },
};

const commonArgs: NotificationConfig = {
  message: 'Message!',
  description: 'Notification example action description',
  key: 'notification-key',
  placement: 'bottomRight',
  icon: 'smile',
  type: 'success',
};

type Story = StoryObj<NotificationConfig>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  
  render: (props) => {
    const handleClick = () => {
      notification.open(props);
    };

    return <Button onClick={() => handleClick()}>Open notification</Button>;
  },
};

export default meta;
