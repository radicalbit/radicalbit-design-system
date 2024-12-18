import classNames from 'classnames';
import { ReactNode } from 'react';
import Popover from '@Components/popover';

type Props = {
  children: ReactNode;
  className?: string;
  highlighted?: boolean;
  hoverable?: boolean;
  modifier?: string;
  onClick?: () => void;
  width?: number | string;
  withPreview?: boolean;
};

const MOUSE_ENTER_DELAY = 0.3;
const MAX_PREVIEW_HEIGHT = 200;

const Thumbnail = ({
  children,
  className = '',
  highlighted = false,
  hoverable = false,
  modifier = '',
  onClick,
  width = 80,
  withPreview = false,
  ...others
}: Props) => {
  const css = classNames({
    'c-thumbnail--highlighted': highlighted,
    'c-thumbnail--hoverable': hoverable,
  });

  const thumbnailBody = (
    <div
      role="presentation"
      onClick={onClick}
      className={`c-thumbnail ${modifier} ${css} ${className}`}
      style={{ minWidth: width, width, height: width }}
      {...others}
    >
      {children}
    </div>
  );

  return withPreview ? (
    <Popover
      modifier="c-thumbnail__preview"
      content={children}
      maxHeight={MAX_PREVIEW_HEIGHT}
      mouseEnterDelay={MOUSE_ENTER_DELAY}
    >
      {thumbnailBody}
    </Popover>
  ) : (
    thumbnailBody
  );
};

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail;
