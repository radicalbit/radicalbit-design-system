import AntdAlert, { AlertProps } from 'antd/lib/alert';
import classNames from 'classnames';
import React from 'react';

type AlertPropsOmitted = Omit<AlertProps, 'type'>;

export interface Props extends AlertPropsOmitted {
  className?: string,
  modifier?: string;
  mode?: 'light' | 'dark';
  alignment?: 'vertical-centered';
  type?: 'text';
}

const Alert = ({
  className,
  modifier,
  mode,
  alignment,
  type = 'text',
  ...other
}: Props) => {
  const css = classNames({
    [`c-alert--type-${type}`]: type,
    [`c-alert--alignment-${alignment}`]: alignment,
    [`${mode}`]: mode,
  });

  return <AntdAlert className={`c-alert ${modifier} ${css} ${className}`} {...other} />;
};

Alert.displayName = 'Alert';

export default Alert;
