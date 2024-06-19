import AntDrawer, { DrawerProps } from 'antd/lib/drawer';

type Props = DrawerProps & {
  modifier?: string;
};

const Drawer = (props: Props): React.ReactElement<typeof AntDrawer> => {
  const {
    children,
    className = '',
    closable,
    destroyOnClose,
    height,
    mask,
    maskClosable,
    modifier = '',
    onClose,
    open,
    placement,
    prefixCls,
    push,
    title,
    width,
    zIndex,
    ...otherProps
  } = props;

  return (
    <AntDrawer
      open={open}
      onClose={onClose}
      title={title}
      className={`c-drawer ${modifier} ${className}`}
      closable={closable}
      destroyOnClose={destroyOnClose}
      maskClosable={maskClosable}
      mask={mask}
      width={width || '12.5rem'}
      height={height || '12.5rem'}
      zIndex={zIndex}
      prefixCls={prefixCls}
      push={push}
      placement={placement}
      {...otherProps}
    >
      {children}
    </AntDrawer>
  );
};

Drawer.displayName = 'Drawer';

export default Drawer;
