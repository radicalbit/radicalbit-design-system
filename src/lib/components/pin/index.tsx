import classnames from 'classnames';
import { memo } from 'react';

export type Props = {
  className?: string;
  color?: string;
  justify?: 'left' | 'center';
  label?: string | React.ReactNode;
  modifier?: string;
  noMargins?: boolean;
  onClick?: () => void;
  size?: 'small' | 'micro';
  style?: Record<string, unknown>,
  type?:
    | 'animated'
    | 'error'
    | 'filled-error'
    | 'filled-secondary'
    | 'filled-success'
    | 'filled-warning'
    | 'filled'
    | 'secondary'
    | 'success'
    | 'warning';
};

const Pin = ({
  color,
  className = '',
  justify = 'center',
  label,
  modifier = '',
  noMargins,
  onClick,
  size,
  style = {},
  type,
  ...others
}: Props) => {
  const hoverable = onClick ? 'm-pin__badge--hoverable' : '';

  const css = classnames({
    [`m-pin--justify-${justify}`]: justify,
  });

  const cssBadge = classnames({
    [`m-pin__badge--size-${size}`]: size,
    [`m-pin__badge--type-${type}`]: type,
    'no-margin': noMargins,
  });

  const pinStyle = color ? { ...style, background: color, border: 'none' } : style;

  const pin = (
    <a
      {...others}
      className={`m-pin__badge ${hoverable} ${cssBadge} ${modifier} ${className}`}
      onClick={onClick}
      role="presentation"
      style={pinStyle}
    >
      &nbsp;
    </a>
  );

  return label ? (
    <div className={`m-pin ${css}`}>
      {pin}

      <div className="m-pin--label">{label}</div>
    </div>
  ) : (
    <div className={`m-pin ${css}`}>{pin}</div>
  );
};

Pin.displayName = 'Pin';

export default memo<Props>(Pin);
