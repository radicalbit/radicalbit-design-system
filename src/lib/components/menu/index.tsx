import AntdMenu, { MenuProps } from 'antd/es/menu';
import classNames from 'classnames';

export type Props = MenuProps & {
  alignment?: 'centered';
  dark?: boolean
  modifier?: string;
  background?: 'default' | 'transparent';
};

const Menu = ({
  alignment,
  background = 'default',
  className = '',
  dark = false,
  modifier = '',
  ...others
}: Props) => {
  const css = classNames({
    [`c-menu--alignment-${alignment}`]: alignment,
    [`c-menu--background-${background}`]: background,
    dark,
  });

  return (
    <AntdMenu
      className={`c-menu ${css} ${modifier} ${className}`}
      {...others}
    />
  );
};

Menu.displayName = 'Menu';

Menu.HIDE_EXPAND_ICON = 'c-menu__hide-expand-icon';

export default Menu;
