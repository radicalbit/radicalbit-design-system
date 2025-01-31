import notification, { ArgsProps } from 'antd/es/notification';
import { GlobalConfigProps } from 'antd/es/notification/interface';
import classNames from 'classnames';

const DEFAULT_DURATION = 12;

export type NotificationConfig = GlobalConfigProps &
  Omit<ArgsProps, 'type'> & {
    iconWithBorder?: boolean;
    modifier?: string;
    type?: ArgsProps['type'] | 'running' | 'completed' | 'success' | 'error';
  };

export default {
  ...notification,
  open: ({
    className = '',
    duration = DEFAULT_DURATION,
    iconWithBorder = true,
    modifier = '',
    type,
    ...others
  }: NotificationConfig) => {
    const css = classNames({
      'c-notification--clickable': !!others.onClick,
      [`c-notification--type-${type}`]: type,
      'c-notification--icon-with-border': iconWithBorder,
    });
    notification.open({
      ...others,
      className: `c-notification ${css} ${modifier} ${className}`,
      duration,
    });
  },
};
