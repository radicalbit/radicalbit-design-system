import { ReactNode, memo } from 'react';
import Avatar from '@Components/avatar';
import Popover from '@Components/popover';
import Tooltip from '@Components/tooltip';
import { PopoverProps } from 'antd';
import { AvatarProps } from 'antd/lib/skeleton/Avatar';

type Props = {
  actions?: { one?: ReactNode; two?: ReactNode };
  className?: string;
  content?: ReactNode;
  modifier?: string;
  placement?: PopoverProps['placement'];
  popoverWidth?: number;
  size?: AvatarProps['size'];
  title?: ReactNode;
  trigger?: string | string[];
  userAbbreviation?: string;
  userAvatarPath?: string;
  userClassification?: string;
  userName?: string;
};

const UserAvatar = ({
  className = '',
  content,
  modifier = '',
  placement,
  popoverWidth = 300,
  size,
  title,
  trigger = 'hover',
  userAbbreviation,
  userAvatarPath,
  userClassification,
  userName,
}: Props) => {
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
          title={title}
          trigger={trigger}
          placement={placement}
        >
          <Avatar size={size} src={userAvatarPath}>
            {userAbbreviation}
          </Avatar>
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
};

UserAvatar.defaultProps = {
  placement: 'rightBottom',
  trigger: 'hover',
};

UserAvatar.displayName = 'UserAvatar';

export default memo(UserAvatar);
