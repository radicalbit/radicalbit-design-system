import classNames from 'classnames';
import { ReactNode, useState } from 'react';

type Props = {
  backgroundImage?: string;
  borderType?: 'light' | 'none';
  buttonPosition?: 'vertical' | 'adaptive';
  dark?:boolean,
  footer?: ReactNode;
  header?: ReactNode;
  height?: string;
  hoverType?: 'primary' | 'secondary' | 'rounded' | 'add-new';
  main: string | ReactNode;
  mainType?: 'wide-center';
  mode?: 'light' | 'dark';
  modifier?: string;
  noBackground?: boolean;
  onClick?: () => void;
  primaryColor?: string;
  secondary?: ReactNode;
  secondaryType?: 'single';
  size?: 'xsmall' | 'small';
  status?:
    | 'default'
    | 'active'
    | 'activeOnHover'
    | 'active-horizontal'
    | 'unactive'
    | 'disabled'
    | 'in-evidence';
  type?: 'primary' | 'primary-light' | 'secondary' | 'secondary-medium' | 'error' | 'rounded' | 'add-new';
  width?: string;
};

function Board({
  backgroundImage = undefined,
  borderType,
  buttonPosition,
  footer,
  dark = false,
  header,
  height = undefined,
  main,
  mainType,
  mode,
  modifier = '',
  primaryColor = undefined,
  secondary,
  secondaryType,
  size,
  status,
  type,
  width = undefined,
  noBackground = false,
  hoverType,
  onClick,
}: Props) {
  const [isHover, setIsHover] = useState(false);

  const presetModifiers = classNames({
    [`l-board--status-${status}`]: status,
    [`l-board--size-${size}`]: size,
    [`l-board--type-${type}`]: !isHover && type,
    [`l-board--type-${hoverType}`]: isHover && hoverType,
    [`l-board--button-position-${buttonPosition}`]: buttonPosition,
    [`l-board--secondary-type-${secondaryType}`]: secondaryType,
    [`l-board--border-type-${borderType}`]: borderType,
    'l-board--no-background': noBackground,
    'l-board--clickable': onClick,
    dark,
  });

  const cssMode = classNames({
    [`${mode}`]: mode,
  });

  const cssMain = classNames({
    [`l-board__main--type-${mainType}`]: mainType,
  });

  const backgroundImageStyle = backgroundImage
    ? {
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
    }
    : {};

  const boardStyle = {
    height,
    width,
    '--coo-primary': primaryColor,
    ...backgroundImageStyle,
  };

  const handleOnMouseEnter = () => {
    if (hoverType) {
      setIsHover(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (hoverType) {
      setIsHover(false);
    }
  };

  return (
    <div
      style={boardStyle}
      className={`l-board ${presetModifiers} ${modifier} ${cssMode}`}
      onClick={onClick}
      role="presentation"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {header && <div className="l-board__header">{header}</div>}

      {main && <div className={`l-board__main ${cssMain}`}>{main}</div>}

      {secondary && <div className="l-board__secondary">{secondary}</div>}

      {footer && <div className="l-board__footer">{footer}</div>}
    </div>
  );
}

export default Board;
