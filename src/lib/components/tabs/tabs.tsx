import AntdTabs, { TabsProps } from 'antd/lib/tabs';
import classNames from 'classnames';

type Props = Omit<TabsProps, 'size'> & {
  modifier?: string;
  fullHeight?: boolean;
  noBorder?: boolean;
  maximize?: boolean;
  size?: 'default' | 'large';
  paddedContent?: boolean;
  dark?: boolean;
};

const Tabs = ({
  children,
  modifier = '',
  animated = false,
  centered = false,
  fullHeight = false,
  noBorder = false,
  maximize = false,
  size = 'default',
  paddedContent = false,
  dark = false,
  ...other
}: Props) => {
  const css = classNames({
    'c-tabs--centered': centered,
    'c-tabs--full-height': fullHeight,
    'c-tabs--no-border': noBorder,
    'c-tabs--maximize': maximize,
    [`c-tabs--size-${size}`]: size,
    'c-tabs--padded-content': paddedContent,
    dark,
  });

  return (
    <AntdTabs
      {...other}
      animated={animated}
      className={`rdb-tabs c-tabs ${modifier} ${css}`}
    >
      {children}
    </AntdTabs>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;
