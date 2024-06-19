import AntdLayout from 'antd/lib/layout';
import Header from '@Components/header/newHeader';
import classNames from 'classnames';

const { Sider } = AntdLayout;

export type SecondaryProps = {
  collapsed?: boolean;
  content?: React.ReactNode;
  contentDark?: boolean | null;
  headerContent?: React.ReactNode;
  headerContentDark?: boolean | null;
  onCollapse?: (collapsed: boolean) => void;
  hasHeaderSecondaryContentDark?: boolean;
  hasSecondaryColumnCollapsed?: boolean;
  hasSecondaryContentDark?: boolean;
  mainContent?: React.ReactNode;
  onSecondaryColumnCollapse?: () => void;
};

const SecondaryColumn = (props: SecondaryProps) => {
  const {
    collapsed,
    contentDark,
    headerContent,
    headerContentDark,
    content,
    onCollapse,
  } = props;

  const siderCss = classNames({
    'rdb-layout-secondary-column': true,
    dark: contentDark,
  });

  const headerCss = classNames({
    dark: headerContentDark,
  });

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className={`l-secondary-column ${siderCss}`}
    >
      <div className={`l-secondary-column__header ${headerCss}`}>
        <Header title={headerContent} />
      </div>

      <div className="l-secondary-column__body rdb-layout-secondary-column-content">
        {content}
      </div>
    </Sider>
  );
};

export default SecondaryColumn;
