import AntdLayout from 'antd/es/layout';
import classNames from 'classnames';
import { CSSProperties, ReactNode, memo } from 'react';

export type RightProps = {
  backgroundColor?: string;
  backgroundImage?: string;
  collapsed?: boolean;
  collapsible?: boolean;
  content?: ReactNode;
  contentDark?: ReactNode;
  hasHeaderRightContentDark?: boolean;
  hasRightColumnCollapsed?: boolean;
  hasRightContentDark?: boolean;
  headerAltContent?: ReactNode;
  headerContentDark?: ReactNode;
  onCollapse?: (p: boolean) => void;
  onRightColumnCollapse?: () => void;
  rightColumnCollapsible?: boolean;
  rightColumnHeaderAltContent?: ReactNode;
  rightContent?: ReactNode;
  styles?: CSSProperties;
};

const { Sider, Header } = AntdLayout;

const RightColumn = (props: RightProps) => {
  const {
    backgroundColor,
    backgroundImage,
    collapsed,
    collapsible = false,
    content,
    contentDark,
    headerAltContent,
    headerContentDark,
    onCollapse,
    styles,
  } = props;

  const cssSider = classNames({
    'rdb-layout-right-column': true,
    dark: contentDark,
  });

  const cssHeader = classNames({
    'rdb-layout-right-column-header': true,
    dark: headerContentDark,
  });

  const cssDiv = classNames({
    'rdb-layout-right-column-content': true,
    dark: contentDark,
  });

  const imgBackgroundStyle = backgroundImage
    ? {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
    }
    : {};

  const colorBackgroundStyle = backgroundColor ? { backgroundColor } : {};

  const customStyles = { ...styles, ...colorBackgroundStyle, ...imgBackgroundStyle };

  return (
    <Sider
      className={cssSider}
      collapsed={collapsed}
      collapsible={collapsible}
      onCollapse={onCollapse}
      reverseArrow
      style={customStyles}
    >
      <Header className={cssHeader}>{headerAltContent}</Header>

      <div className={cssDiv}>{content}</div>
    </Sider>
  );
};

export default memo(RightColumn);
