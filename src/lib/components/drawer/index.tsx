import AntDrawer, { DrawerProps } from 'antd/es/drawer';
import classNames from 'classnames';

type Props = DrawerProps & {
  modifier?: string;
  noPadding?: boolean;
};

const Drawer = (props: Props): React.ReactElement<typeof AntDrawer> => {
  const {
    children,
    className = '',
    height,
    modifier = '',
    noPadding = false,
    width,
    ...otherProps
  } = props;

  const css = classNames('c-drawer', modifier, className, {
    'c-drawer--no-padding': noPadding,
  });

  return (
    <AntDrawer
      className={css}
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
