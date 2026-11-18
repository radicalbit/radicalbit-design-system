import { ReactNode, memo } from 'react';
import Avatar from '@Components/avatar';
import Popover from '@Components/popover';
import Tooltip from '@Components/tooltip';
import { PopoverProps } from 'antd';
import { AvatarProps } from 'antd/es/skeleton/Avatar';

interface Props {
  actions?: { one?: ReactNode; two?: ReactNode };
  avatar?: AvatarProps;
  badge?: ReactNode;
  className?: string;
  content?: ReactNode;
  modifier?: string;
  placement?: PopoverProps['placement'];
  popoverWidth?: number;
  size?: AvatarProps['size'];
  title?: ReactNode;
  userAbbreviation: string;
  userAvatarPath: string;
  userClassification?: string;
  userName?: string;
  popoverProps?: PopoverProps;
}

function UserAvatar({
  avatar = {},
  badge,
  className = '',
  content,
  modifier = '',
  placement = 'rightBottom',
  size,
  userAbbreviation,
  userAvatarPath,
  userClassification,
  userName,
  popoverProps,
  popoverWidth = 300,
}: Props) {
  const trigger = popoverProps?.trigger || 'hover';

  const popoverContent = (
    <div className="l-user-avatar__content">{content}</div>
  );

  return (
    <div className={`l-user-avatar ${modifier} ${className}`}>
      <div className="l-user-avatar__badge">
        <Popover
          noPadding
          minWidth={popoverWidth}
          content={popoverContent}
          placement={placement}
          trigger={trigger}
          {...popoverProps}
        >
          <AvatarWithBadge
            avatar={avatar}
            badge={badge}
            size={size}
            userAbbreviation={userAbbreviation}
            userAvatarPath={userAvatarPath}
          />
        </Popover>
      </div>

      <div className="l-user-avatar__name">
        {userName && (
          <strong>
            <Tooltip title={userName}>{userName}</Tooltip>
          </strong>
        )}

        {userClassification && (
          <span>
            <Tooltip title={userClassification}>{userClassification}</Tooltip>
          </span>
        )}
      </div>
    </div>
  );
}

interface AvatarWithBadgeProps {
  avatar: AvatarProps;
  badge?: ReactNode;
  size?: AvatarProps['size'];
  userAbbreviation: string;
  userAvatarPath: string;
}

function AvatarWithBadge({
  avatar,
  badge,
  size,
  userAbbreviation,
  userAvatarPath,
}: AvatarWithBadgeProps) {
  if (!badge) {
    return (
      <Avatar size={size} src={userAvatarPath} {...avatar}>
        {userAbbreviation}
      </Avatar>
    );
  }

  return (
    <span className="l-user-avatar__avatar">
      <Avatar size={size} src={userAvatarPath} {...avatar}>
        {userAbbreviation}
      </Avatar>

      <span className="l-user-avatar__avatar__badge">{badge}</span>
    </span>
  );
}

UserAvatar.displayName = 'UserAvatar';

export default memo(UserAvatar);
