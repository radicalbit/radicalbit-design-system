import AntdMenu, { MenuProps } from 'antd/lib/menu';
import classNames from 'classnames';

type Props = MenuProps & {
  className?: string;
  modifier?: string;
  alignment?: 'centered';
};

const Menu = ({
  className = '',
  modifier = '',
  alignment,
  ...others
}: Props) => {
  const css = classNames({
    [`c-menu--alignment-${alignment}`]: alignment,
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
