import AntdCollapse from 'antd/lib/collapse';
import classNames from 'classnames';
import { ReactNode } from 'react';

export type PropsPanel = {
  children?: ReactNode;
  className?: string;
  extra?: ReactNode;
  header?: ReactNode;
  noBody?: boolean;
  onHover?: () => void;
  isActive?: boolean;
  key: string | number
  dark?:boolean
};

type PropsHoverable = {
  onHover: PropsPanel['onHover'];
  body?: ReactNode;
};

const AntdPanel = AntdCollapse.Panel;

const CollapsePanel = ({
  children,
  className = '',
  extra,
  header,
  noBody,
  onHover,
  dark = false,
  ...others
}: PropsPanel) => {
  const css = classNames({
    'c-collapse__panel--no-body': noBody,
    dark,
  });

  return (
    <AntdPanel
      className={`c-collapse__panel ${css} ${className}`}
      extra={onHover ? <Hoverable onHover={onHover} body={extra} /> : extra}
      header={onHover ? <Hoverable onHover={onHover} body={header} /> : header}
      {...others}
    >
      {onHover ? <Hoverable onHover={onHover} body={children} /> : children}
    </AntdPanel>
  );
};

const Hoverable = ({ body, onHover }: PropsHoverable) => (
  <div className="c-collapse__hoverable" {...onHover}>
    {body}
  </div>
);

export default CollapsePanel;
