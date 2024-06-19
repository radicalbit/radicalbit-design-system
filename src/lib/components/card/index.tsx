import { CSSProperties, ReactNode } from 'react';
import AntdCard, { CardTabListType } from 'antd/lib/card';

interface Props{
    prefixCls?: string,
    /** Card title */
    title?: ReactNode,
    /** Content to render in the top-right corner of the card */
    extra?: ReactNode,
    /** */
    bordered?: boolean,
    /** */
    bodyStyle?: Record<string, unknown>,
    /** */
    style?: CSSProperties,
    /** Enable loading mode */
    loading?: boolean,
    /** Lift up when hovering card */
    hoverable?: boolean,
    /** */
    children?: ReactNode,
    /** */
    id?: string,
    /** Card style type, can be set to inner or not set */
    type?: 'inner' | undefined,
    /** Card cover */
    cover?: ReactNode,
    /** The action list, shows at the bottom of the Card */
    actions?: Array<ReactNode>,
    /** List of TabPane's head */
    tabList?: CardTabListType[],
    /** Callback when tab is switched */
    onTabChange?: (key: string) => void,
    /** Current TabPane's key */
    activeTabKey?: string,
    /** Initial active TabPane's key, if activeTabKey is not set */
    defaultActiveTabKey?: string,
    /** Class name of the component */
    className?: string
}

const Card = (props: Props) => {
  const {
    prefixCls, title, extra, bordered, bodyStyle, style, loading, hoverable,
    children, id, type, cover, actions, tabList, onTabChange, activeTabKey, defaultActiveTabKey, className = '', ...others
  } = props;

  return (
    <AntdCard
      className={`m-card ${className}`}
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
};

Card.displayName = 'Card';

export default Card;
