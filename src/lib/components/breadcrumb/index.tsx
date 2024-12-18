import AntdBreadcrumb, { BreadcrumbProps } from 'antd/lib/breadcrumb';

export interface Props extends BreadcrumbProps {
  modifier?: string,
}

function Breadcrumb({
  children,
  className = '',
  modifier = '',
  ...otherProps
}: Props) {
  return (
    <AntdBreadcrumb
      className={`coo-breadcrumb ${modifier} ${className}`}
      {...otherProps}
    >
      {children}
    </AntdBreadcrumb>
  );
}

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
