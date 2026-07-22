import AntdAvatar, { AvatarProps } from 'antd/es/avatar';
import classNames from 'classnames';

export interface Props extends AvatarProps {
  className?: string,
  modifier?: string;
  type?: 'default' | 'secondary';
}

function Avatar({
  children,
  className = '',
  modifier = '',
  type = 'default',
  ...others
}: Props) {
  const css = classNames({ [`c-avatar--type-${type}`]: type }, 'c-avatar');

  return (
    <AntdAvatar
      className={`${css} ${modifier} ${className}`}
      {...others}
    >
      {children}
    </AntdAvatar>

  );
}

Avatar.displayName = 'Avatar';

export default Avatar;
