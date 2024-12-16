import { CSSProperties, ReactNode } from 'react';
import AntdCard, { CardTabListType } from 'antd/lib/card';

interface Props{
    actions?: Array<ReactNode>,
    activeTabKey?: string,
    bodyStyle?: Record<string, unknown>,
    bordered?: boolean,
    children?: ReactNode,
    className?: string
    cover?: ReactNode,
    defaultActiveTabKey?: string,
    extra?: ReactNode,
    hoverable?: boolean,
    id?: string,
    loading?: boolean,
    modifier?: string,
    onTabChange?: (key: string) => void,
    prefixCls?: string,
    style?: CSSProperties,
    tabList?: CardTabListType[],
    title?: ReactNode,
    type?: 'inner' | undefined,
}

const Card = ({
  actions,
  activeTabKey,
  bodyStyle,
  bordered,
  children,
  className = '',
  cover,
  defaultActiveTabKey,
  extra,
  hoverable,
  id,
  loading,
  modifier = '',
  onTabChange,
  prefixCls,
  style,
  tabList,
  title,
  type,
  ...others
}: Props) => (
  <AntdCard
    className={`m-card ${modifier} ${className}`}
    prefixCls={prefixCls}
    title={title}
    extra={extra}
    bordered={bordered}
    bodyStyle={bodyStyle}
    style={style}
    loading={loading}
    hoverable={hoverable}
    id={id}
    type={type}
    cover={cover}
    actions={actions}
    tabList={tabList}
    onTabChange={onTabChange}
    activeTabKey={activeTabKey}
    defaultActiveTabKey={defaultActiveTabKey}
    {...others}
  >
    {children}
  </AntdCard>
);

Card.displayName = 'Card';

export default Card;
