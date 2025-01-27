import AntDrawer, { DrawerProps } from 'antd/es/drawer';

type Props = DrawerProps & {
  modifier?: string;
};

const Drawer = (props: Props): React.ReactElement<typeof AntDrawer> => {
  const {
    children,
    className = '',
    height,
    modifier = '',
    width,
    ...otherProps
  } = props;

  return (
    <AntDrawer
      className={`c-drawer ${modifier} ${className}`}
      width={width || '12.5rem'}
      height={height || '12.5rem'}
      {...otherProps}
    >
      {children}
    </AntDrawer>
  );
};

Drawer.displayName = 'Drawer';

export default Drawer;
