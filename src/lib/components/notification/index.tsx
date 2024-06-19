import notification, { ConfigProps, ArgsProps } from 'antd/lib/notification';
import classNames from 'classnames';

const DEFAULT_DURATION = 12;

export type NotificationConfig = Omit<ConfigProps, 'duration'> &
  Omit<ArgsProps, 'type'> & {
    type?: 'running' | 'completed' | 'success' | 'error';
    onClick?: () => void;
    modifier?: string;
    iconWithBorder?: boolean;
    duration?: number | null;
  };

export default {
  ...notification,
  open: ({
    modifier = '',
    type,
    onClick,
    duration = DEFAULT_DURATION,
    iconWithBorder = true,
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
      className: `c-notification ${css} ${modifier}`,
      duration,
    });
  },
};
