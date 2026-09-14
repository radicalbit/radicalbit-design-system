import {
  FontAwesomeIconProps,
  FontAwesomeIcon as LibraryIcon,
} from '@fortawesome/react-fontawesome/';
import classNames from 'classnames';
import { forwardRef, MouseEventHandler, Ref } from 'react';
import type { Props as TooltipProps } from '@Components/tooltip';
import Tooltip from '@Components/tooltip';
interface Props extends FontAwesomeIconProps {
  className?: string;
  enableColorMode?: boolean;
  modifier?: string;
  onClick?: MouseEventHandler<SVGElement>;
  tooltip?: TooltipProps;
  type?: 'primary' | 'secondary' | 'secondary-light' | 'success' | 'warning' | 'error';
}

// Overlays (Tooltip, Popconfirm, Dropdown) attach a ref to their child, so this
// has to forward one — a bare function component makes React warn and the
// overlay lose its anchor.
const FontAwesomeIcon = forwardRef(({
  className = '',
  enableColorMode = false,
  modifier = '',
  onClick,
  type,
  icon,
  tooltip,
  ...others
}: Props, ref: Ref<SVGSVGElement>) => {
  const css = classNames({
    'c-font-awesome-icon--enable-color-mode': enableColorMode,
    'c-font-awesome-icon--clickable': !!onClick,
    [`c-font-awesome-icon--${type}`]: type,
  });
  
  if (tooltip) {
    return (
      <Tooltip {...tooltip}>
        <LibraryIcon
          ref={ref}
          icon={icon}
          className={`c-font-awesome-icon ${css} ${modifier} ${className}`}
          onClick={onClick}
          {...others}
        />
      </Tooltip>
    );
  }

  return (
    <LibraryIcon
      ref={ref}
      icon={icon}
      className={`c-font-awesome-icon ${css} ${modifier} ${className}`}
      onClick={onClick}
      {...others}
    />
  );
});

FontAwesomeIcon.displayName = 'FontAwesomeIcon';

export default FontAwesomeIcon;
