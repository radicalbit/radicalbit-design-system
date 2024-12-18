import AntdAvatar, { AvatarProps } from 'antd/lib/avatar';

export interface Props extends AvatarProps {
  className?: string,
  modifier?: string;
}

const Avatar = ({
  children,
  className = '',
  modifier = '',
  ...others
}: Props) => (
  <AntdAvatar
    className={`c-avatar ${modifier} ${className}`}
    {...others}
  >
    {children}
  </AntdAvatar>

);

Avatar.displayName = 'Avatar';

export default Avatar;
