import { ReactNode, memo, useState } from 'react';
import AntdLayout from 'antd/lib/layout';
import Drawer from '@Components/drawer/index';

type MainProps = {
  bottomDrawerContent?: ReactNode;
  bottomDrawerTitle?: ReactNode;
  content?: ReactNode;
  contentDark?: ReactNode;
  headerClassName?: string;
  headerContent?: ReactNode;
  headerContentDark?: ReactNode;
  showBottomDrawerOnHover?: ReactNode;
  mainClassName?: string;
  rightColumnWidth?: number | string;
};

const { Header, Content } = AntdLayout;

const MemoLayout = memo(AntdLayout);
const MemoHeader = memo(Header);
const MemoContent = memo(Content);

const getRightColumnWidthValue = (value: string | number) => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};

const MainColumn = (props: MainProps) => {
  const {
    bottomDrawerContent,
    bottomDrawerTitle,
    content,
    contentDark,
    headerClassName = '',
    headerContent,
    headerContentDark,
    showBottomDrawerOnHover,
    mainClassName = '',
    rightColumnWidth,
  } = props;

  const [bottomDrawerIsOpen, setBottomDrawerIsOpen] = useState(false);

  const showBottomDrawer = () => {
    setBottomDrawerIsOpen(true);
  };

  const hideBottomDrawer = () => {
    setTimeout(() => {
      setBottomDrawerIsOpen(false);
    }, 1000);
  };

  const style : Record<string, string| number> | undefined = rightColumnWidth ? {
    '--right-column-width': getRightColumnWidthValue(rightColumnWidth),
  } : undefined;

  return (
    <MemoLayout
      className="rdb-layout-main-column"
      style={style}
    >
      {headerContent && (
        <MemoHeader
          className={`${headerClassName} rdb-layout-main-column-header ${
            headerContentDark ? 'dark' : ''
          }`}
        >
          {headerContent}
        </MemoHeader>
      )}

      {content && (
        <MemoContent
          className={`${mainClassName} ${contentDark ? 'dark' : ''} ${
            !headerContent ? 'ant-layout-content--no-header' : ''
          }`}
        >
          {content}

          {showBottomDrawerOnHover && (
            <>
              <div
                className="hover-area"
                onMouseEnter={showBottomDrawer}
                onMouseLeave={hideBottomDrawer}
              >
              </div>

              <Drawer
                title={bottomDrawerTitle}
                placement="bottom"
                closable
                onClose={hideBottomDrawer}
                open={bottomDrawerIsOpen}
                mask={false}
                width={123}
              >
                {bottomDrawerContent}
              </Drawer>
            </>
          )}
        </MemoContent>
      )}
    </MemoLayout>
  );
};

export default MainColumn;
