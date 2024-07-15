import Menu from '@Components/menu';
import type { MenuItem, MenuType } from '@Src/lib/types/global';

export type MainProps = {
  content?: React.ReactNode;
  contentDark?: boolean | null;
  hasLeftColumnCollapsed?: boolean | null;
  mainNavAltContent?: React.ReactNode;
  mainNavSecondaryAltContent?: React.ReactNode;
  menu?: MenuType;
  bottomMenu?: React.ReactNode;
  headerContent?: React.ReactNode;
  mainContent?: React.ReactNode;
  bottomDrawerContent?: React.ReactNode;
  headerClassName?: string;
  mainClassName?: string;
  bottomDrawerTitle?: string;
  hasHeaderContentDark?: boolean;
  hasMainContentDark?: boolean;
  showBottomDrawerOnHover?: string;
};

const createMenuItem = (route: MenuItem) => {
  const className = `${route.className || ''}${
    route.isLimitedToPremium ? ' premium' : ''
  }`;

  return {
    label: (
      <>
        {route.icon && <span className="anticon">{route.icon}</span>}
        {route.title && <span>{route.title}</span>}
        {route.link}
      </>
    ),
    key: route.position.toString(),
    disabled: route.disabled,
    title: route.title,
    className,
  };
};

function MainNav({
  content,
  contentDark,
  hasLeftColumnCollapsed,
  mainNavAltContent,
  mainNavSecondaryAltContent,
  menu,
  bottomMenu,
}: MainProps) {
  return (
    <>
      {/* MAIN NAV ALT CONTENT */}

      {mainNavAltContent && (
        <div className="cona-c-main-nav-alt-content">{mainNavAltContent}</div>
      )}

      {mainNavSecondaryAltContent && (
        <div className="cona-c-main-nav-secondary-alt-content">{mainNavSecondaryAltContent}</div>
      )}

      {/* MENU */}
      {menu ? (
        <div className="cona-l-menu cona-l-menu--top">
          <Menu
            selectedKeys={[
              menu.selectedItem ? menu.selectedItem.toString() : '',
            ]}
            mode="inline"
            theme={contentDark ? 'dark' : undefined}
            alignment={hasLeftColumnCollapsed ? 'centered' : undefined}
            items={menu.items.map(createMenuItem)}
          />
        </div>
      ) : (
        content
      )}

      {/* AVATAR */}
      {bottomMenu && (
        <div className="cona-l-menu cona-l-menu--bottom">{bottomMenu}</div>
      )}
    </>
  );
}

export default MainNav;
