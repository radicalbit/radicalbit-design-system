import classnames from 'classnames';
import { memo } from 'react';

export type Props = {
  color?: string;
  label?: string | React.ReactNode;
  modifier?: string;
  noMargins?: boolean;
  onClick?: () => void;
  size?: 'small' | 'micro';
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
  justify?: 'left' | 'center';
};

const Pin = ({
  color,
  label,
  modifier = '',
  noMargins,
  onClick,
  size,
  type,
  justify = 'center',
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

  const style = color ? { background: color, border: 'none' } : {};

  const pin = (
    <a
      {...others}
      className={`m-pin__badge ${hoverable} ${cssBadge} ${modifier}`}
      onClick={onClick}
      role="presentation"
      style={style}
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
