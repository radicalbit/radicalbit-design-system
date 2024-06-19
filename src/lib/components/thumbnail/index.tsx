import classNames from 'classnames';
import { ReactNode } from 'react';
import Popover from '@Components/popover';

type Props = {
  modifier?: string;
  children: ReactNode;
  highlighted?: boolean;
  width?: number | string;
  withPreview?: boolean;
  hoverable?: boolean;
  onClick?: () => void;
  className?: string;
};

const MOUSE_ENTER_DELAY = 0.3;
const MAX_PREVIEW_HEIGHT = 200;

const Thumbnail = ({
  modifier = '',
  children,
  highlighted = false,
  width = 80,
  withPreview = false,
  hoverable = false,
  onClick,
  className = '',
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
