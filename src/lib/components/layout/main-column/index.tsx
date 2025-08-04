import { ReactNode, memo, useState } from 'react';
import AntdLayout from 'antd/es/layout';
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
};

const { Header, Content } = AntdLayout;

const MemoLayout = memo(AntdLayout);
const MemoHeader = memo(Header);
const MemoContent = memo(Content);

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

  return (
    <MemoLayout
      className="rdb-layout-main-column"
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
