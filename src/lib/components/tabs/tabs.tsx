import AntdTabs, { TabsProps } from 'antd/es/tabs';
import classNames from 'classnames';

type Props = Omit<TabsProps, 'size'> & {
  dark?: boolean;
  fullHeight?: boolean;
  maximize?: boolean;
  modifier?: string;
  noBorder?: boolean;
  paddedContent?: boolean;
  size?: 'default' | 'large';
};

const Tabs = ({
  animated = false,
  centered = false,
  children,
  className = '',
  dark = false,
  fullHeight = false,
  maximize = false,
  modifier = '',
  noBorder = false,
  paddedContent = false,
  size = 'default',
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
      className={`rdb-tabs c-tabs ${modifier} ${css} ${className}`}
    >
      {children}
    </AntdTabs>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;
