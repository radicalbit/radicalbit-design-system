import AntdAvatar, { AvatarProps } from 'antd/lib/avatar';

const Avatar = ({ children, className, ...others }: AvatarProps) => (
  <AntdAvatar
    className={`c-avatar ${className}`}
    {...others}
  >
    {children}
  </AntdAvatar>

);

Avatar.displayName = 'Avatar';

export default Avatar;
