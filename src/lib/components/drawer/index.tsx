import AntDrawer, { DrawerProps } from 'antd/lib/drawer';

type Props = DrawerProps & {
  modifier?: string;
};

const Drawer = ({
  children,
  className = '',
  height,
  modifier = '',
  width,
  ...otherProps
}: Props): React.ReactElement<typeof AntDrawer> => (
  <AntDrawer
    className={`c-drawer ${modifier} ${className}`}
    width={width || '12.5rem'}
    height={height || '12.5rem'}
    {...otherProps}
  >
    {children}
  </AntDrawer>
);

Drawer.displayName = 'Drawer';

export default Drawer;
