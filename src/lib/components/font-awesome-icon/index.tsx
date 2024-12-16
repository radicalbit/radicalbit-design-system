import {
  FontAwesomeIconProps,
  FontAwesomeIcon as LibraryIcon,
} from '@fortawesome/react-fontawesome/';
import classNames from 'classnames';
import { MouseEventHandler } from 'react';

interface Props extends FontAwesomeIconProps {
  className?: string;
  enableColorMode?: boolean;
  modifier?: string;
  onClick?: MouseEventHandler<SVGElement>;
  type?: 'primary' | 'secondary' | 'secondary-light' | 'success' | 'warning' | 'error';
}

const FontAwesomeIcon = ({
  className = '',
  modifier = '',
  enableColorMode = false,
  onClick,
  type,
  icon,
  ...others
}: Props) => {
  const css = classNames({
    'c-font-awesome-icon--enable-color-mode': enableColorMode,
    'c-font-awesome-icon--clickable': !!onClick,
    [`c-font-awesome-icon--${type}`]: type,
  });

  return (
    <LibraryIcon
      icon={icon}
      className={`c-font-awesome-icon ${css} ${modifier} ${className}`}
      onClick={onClick}
      {...others}
    />
  );
};

FontAwesomeIcon.displayName = 'FontAwesomeIcon';

export default FontAwesomeIcon;
