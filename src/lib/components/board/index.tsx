import classNames from 'classnames';
import { HTMLAttributes, ReactNode, useState } from 'react';

type SlotProps = HTMLAttributes<HTMLDivElement> & {
  divider?: boolean;
  padding?: 'none' | 'compact';
  type?: 'secondary';
};

type Props = HTMLAttributes<HTMLDivElement> & {
  backgroundImage?: string;
  backgroundLevel?: 0 | 1 | 2;
  borderType?: 'light' | 'none';
  buttonPosition?: 'vertical' | 'adaptive';
  className?: string;
  footer?: ReactNode;
  dark?: boolean;
  header?: ReactNode;
  headerProps?: SlotProps;
  height?: string;
  hoverType?: 'primary' | 'secondary' | 'rounded' | 'add-new';
  main: string | ReactNode;
  mainProps?: SlotProps;
  mainType?: 'wide-center';
  mode?: 'light' | 'dark';
  modifier?: string;
  noBackground?: boolean;
  overflow?: 'auto' | 'hidden' | 'scroll' | 'visible';
  onClick?: () => void;
  primaryColor?: string;
  secondary?: ReactNode;
  secondaryProps?: SlotProps;
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
  type?: 'primary' | 'primary-light' | 'secondary' | 'secondary-light' | 'secondary-medium' | 'error' | 'rounded' | 'add-new';
  width?: string;
};

interface BoardSlotProps {
  children: ReactNode;
  className?: string;
  name: 'header' | 'main' | 'secondary';
  slotProps?: SlotProps;
}

function BoardSlot({
  children, className, name, slotProps = {},
}: BoardSlotProps) {
  const {
    className: slotClassName, divider = false, padding, type, ...rest
  } = slotProps;

  return (
    <div
      {...rest}
      className={classNames(
        `l-board__${name}`,
        {
          'l-board__slot--flush': padding,
          [`l-board__${name}--flush`]: padding,
          [`l-board__slot--padding-${padding}`]: padding,
          'l-board__slot--divider': divider,
          [`l-board__slot--type-${type}`]: type,
        },
        className,
        slotClassName,
      )}
    >
      {children}
    </div>
  );
}

function Board({
  backgroundImage = undefined,
  backgroundLevel,
  borderType,
  buttonPosition,
  className = '',
  footer,
  header,
  headerProps,
  dark = false,
  height = undefined,
  main,
  mainProps,
  mainType,
  mode,
  modifier = '',
  primaryColor = undefined,
  secondary,
  secondaryProps,
  secondaryType,
  size,
  status,
  type,
  width = undefined,
  noBackground = false,
  overflow,
  hoverType,
  onClick,
  ...rest
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
    [`l-board--overflow-${overflow}`]: overflow,
    [`l-board--bg-lv${backgroundLevel}`]: backgroundLevel !== undefined,
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
      {...rest}
      style={boardStyle}
      className={`l-board ${presetModifiers} ${modifier} ${cssMode} ${className}`}
      onClick={onClick}
      role="presentation"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {header && <BoardSlot name="header" slotProps={headerProps}>{header}</BoardSlot>}

      {main && <BoardSlot className={cssMain} name="main" slotProps={mainProps}>{main}</BoardSlot>}

      {secondary && <BoardSlot name="secondary" slotProps={secondaryProps}>{secondary}</BoardSlot>}

      {footer && <div className="l-board__footer">{footer}</div>}
    </div>
  );
}

export default Board;
