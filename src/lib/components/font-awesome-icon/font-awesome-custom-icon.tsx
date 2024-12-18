import classNames from 'classnames';
import { MouseEventHandler, ReactElement, cloneElement } from 'react';
import * as FontAwesomeSvgCore from '@fortawesome/fontawesome-svg-core';

interface Props {
  children: ReactElement
  className?: string;
  enableColorMode?: boolean;
  modifier?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const FontAwesomeCustomIcon = ({
  children,
  className = '',
  enableColorMode = false,
  modifier = '',
  onClick,
  type,
  ...other
}: Props) => {
  /**
   * We need to call insertCSS() because we are using fontawesome's css classes inside this component.
   * We don't need to wrap this function inside a useEffect because insertCss checks if the css was already loaded before.
   */
  FontAwesomeSvgCore.dom.insertCss();

  const css = classNames({
    'c-font-awesome-custom-icon--enable-color-mode': enableColorMode,
    'c-font-awesome-custom-icon--clickable': !!onClick,
    [`c-font-awesome-custom-icon--${type}`]: type,
  });

  return cloneElement(
    children,
    { className: `c-font-awesome-custom-icon svg-inline--fa ${modifier} ${className} ${css}`, onClick, ...other }
  );
};

FontAwesomeCustomIcon.displayName = 'FontAwesomeCustomIcon';

export default FontAwesomeCustomIcon;
