import * as React from 'react';
import AntdLayout, { LayoutProps, SiderProps } from 'antd/lib/layout';
import classNames from 'classnames';
import LayoutMainNav from '@Components/layout/main-nav';
import { MenuType } from '@Src/lib/types/global';

export type LeftProps = Omit<LayoutProps, 'content'> &
  Omit<SiderProps, 'content'> & {
    content?: React.ReactNode;
    contentDark?: boolean;
    headerAltContent?: React.ReactNode;
    headerContentDark?: React.ReactNode;
    headerSecondaryContent?: React.ReactNode;
    headerTertiaryContent?: React.ReactNode;
    menu?: MenuType;
    bottomMenu?: React.ReactNode;
    backgroundImage?: string;
    backgroundColor?: string;
    collapsible?: boolean;
    hasHeaderLeftContentDark?: boolean;
    hasLeftColumnCollapsed?: boolean;
    hasLeftContentDark?: boolean;
    leftColumnHeaderAltContent?: React.ReactNode;
    leftColumnHeaderSecondaryContent?: React.ReactNode;
    leftColumnHeaderTertiaryContent?: React.ReactNode;
    leftContent?: React.ReactNode;
    mainMenu?: MenuType;
    onLeftColumnCollapse?: (v: boolean) => void;
  };

const { Sider, Header } = AntdLayout;

const LeftColumn = (props: LeftProps) => {
  const {
    backgroundColor,
    backgroundImage,
    bottomMenu,
    collapsed,
    collapsible = true,
    content,
    contentDark,
    headerAltContent,
    headerContentDark,
    headerSecondaryContent,
    headerTertiaryContent,
    menu,
    onCollapse,
  } = props;

  const cssSider = classNames({ 'cona-l-sider': true, dark: contentDark });

  const cssHeader = classNames({
    'cona-l-sider__header': true,
    dark: headerContentDark,
  });

  const cssContent = classNames({
    'cona-l-sider__content': true,
    dark: contentDark,
  });

  const imgBackgroundStyle = backgroundImage
    ? {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
    }
    : {};

  const colorBackgroundStyle = backgroundColor ? { backgroundColor } : {};

  const customStyles = { ...colorBackgroundStyle, ...imgBackgroundStyle };

  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsed}
      onCollapse={onCollapse}
      className={cssSider}
      style={customStyles}
    >
      <Header className={cssHeader}>
        <div className="cona-c-logo">{headerAltContent}</div>
      </Header>

      <div className={cssContent}>
        <LayoutMainNav
          content={content}
          contentDark={contentDark}
          hasLeftColumnCollapsed={collapsed}
          mainNavAltContent={headerSecondaryContent}
          mainNavSecondaryAltContent={headerTertiaryContent}
          menu={menu}
          bottomMenu={bottomMenu}
        />
      </div>
    </Sider>
  );
};

export default React.memo(LeftColumn);
