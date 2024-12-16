import notification, { ConfigProps, ArgsProps } from 'antd/lib/notification';
import classNames from 'classnames';

const DEFAULT_DURATION = 12;

export type NotificationConfig = Omit<ConfigProps, 'duration'> &
  Omit<ArgsProps, 'type'> & {
    duration?: number | null;
    iconWithBorder?: boolean;
    modifier?: string;
    onClick?: () => void;
    type?: 'running' | 'completed' | 'success' | 'error';
  };

export default {
  ...notification,
  open: ({
    className = '',
    duration = DEFAULT_DURATION,
    iconWithBorder = true,
    modifier = '',
    onClick,
    type,
    ...others
  }: NotificationConfig) => {
    const css = classNames({
      'c-notification--clickable': !!onClick,
      [`c-notification--type-${type}`]: type,
      'c-notification--icon-with-border': iconWithBorder,
    });
    notification.open({
      ...others,
      onClick,
      className: `c-notification ${css} ${modifier} ${className}`,
      duration,
    });
  },
};
