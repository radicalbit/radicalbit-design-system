import AntdPopover, { PopoverProps } from 'antd/lib/popover';
import classNames from 'classnames';

type Props = PopoverProps & {
  hideArrow?: boolean;
  maxHeight?: number;
  minWidth?: number;
  modifier?: string;
  noPadding?: boolean;
};

const Popover = (props: Props) => {
  const {
    children,
    content,
    hideArrow = false,
    maxHeight,
    minWidth = 0,
    modifier = '',
    overlayClassName,
    placement = 'leftTop',
    title,
    trigger,
    noPadding,
    ...otherProps
  } = props;

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
      title={title}
      content={content}
      overlayClassName={`${
        overlayClassName || ''
      } c-popover ${css} ${modifier}`}
      overlayStyle={{
        minWidth: minWidth ? `${minWidth}px` : 'auto',
        maxHeight: maxHeight ? `${maxHeight}px` : 'auto',
      }}
      trigger={trigger}
      {...otherProps}
    >
      <div className={`c-popover__child ${cssChild}`}>{children}</div>
    </AntdPopover>
  );
};

Popover.displayName = 'Popover';

export default Popover;
