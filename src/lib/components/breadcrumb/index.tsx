import AntdBreadcrumb, { BreadcrumbProps } from 'antd/lib/breadcrumb';

function Breadcrumb({ children, ...otherProps }: BreadcrumbProps) {
  return (
    <AntdBreadcrumb
      className="coo-breadcrumb"
      {...otherProps}
    >
      {children}
    </AntdBreadcrumb>
  );
}

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
