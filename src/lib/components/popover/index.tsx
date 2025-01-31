import AntdPopover, { PopoverProps } from 'antd/es/popover';
import classNames from 'classnames';

type Props = PopoverProps & {
  hideArrow?: boolean;
  maxHeight?: number;
  minWidth?: number;
  modifier?: string;
  noPadding?: boolean;
};

const Popover = ({
  children,
  className = '',
  hideArrow = false,
  maxHeight,
  minWidth = 0,
  modifier = '',
  noPadding,
  overlayClassName,
  placement = 'leftTop',
  trigger,
  ...otherProps
}: Props) => {
  const css = classNames({
    'c-popover--hidden-arrow': hideArrow,
    'c-popover--noPadding': noPadding,
  });

  const cssChild = classNames({
    'c-popover__child--clickable': trigger,
  });

  return (
    <AntdPopover
      placement={placement}
      overlayClassName={`${overlayClassName || ''} c-popover ${css} ${modifier} ${className}`}
      overlayStyle={{
        minWidth: minWidth ? `${minWidth}px` : 'auto',
        maxHeight: maxHeight ? `${maxHeight}px` : 'auto',
      }}
      {...otherProps}
    >
      <div className={`c-popover__child ${cssChild}`}>{children}</div>
    </AntdPopover>
  );
};

Popover.displayName = 'Popover';

export default Popover;
