import Menu, { Props as MenuProps } from '@Components/menu';
import { ItemType, SubMenuType, MenuItemType } from 'antd/es/menu/interface';

type Props = Omit<MenuProps, 'mode' | 'selectedKeys' | 'openKeys'> & {
  selectedKey?: string;
  openKey?: string;
};

const MenuInlineOnce = ({
  items = [],
  openKey,
  selectedKey,
  ...others
}: Props) => {
  // *** *** *** *** *** *** *** *** *** *** *
  // *** Handle className for the MenuItem ***
  // *** *** *** *** *** *** *** *** *** *** *
  const tmp = items.map((menuItem) => {
    if (openKey && openKey === menuItem?.key) {
      return { ...menuItem, className: `${menuItem?.className || ''} ant-menu-submenu-selected` };
    }
    return menuItem;
  });
  
  // *** *** *** *** *** *** *** *** *** ***  ***
  // *** Handle className for the SubMenuItem ***
  // *** *** *** *** *** *** *** *** *** ***  ***
  const newItems = tmp.map((menuItem) => {
    const children = (menuItem as SubMenuType).children.map((submenuItem) => {
      const className = submenuItem?.key === selectedKey
        ? `${submenuItem?.className || ''} ant-menu-item-selected`
        : submenuItem?.className;
      return ({ ...submenuItem, className });
    });
    
    return ({ ...menuItem, children });
  }) as ItemType<MenuItemType>[];
  return (
    <Menu
      {...others}
      items={newItems}
      mode="inline"
      openKeys={openKey ? [openKey] : undefined}
      selectedKeys={[]}
    />
  );
};

MenuInlineOnce.displayName = 'MenuInlineOnce';
MenuInlineOnce.HIDE_EXPAND_ICON = 'c-menu__hide-expand-icon';

export default MenuInlineOnce;
