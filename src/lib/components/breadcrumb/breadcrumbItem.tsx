import AntdBreadcrumb, { BreadcrumbItemProps } from 'antd/lib/breadcrumb';
import classNames from 'classnames';

const AntdBreadcrumbItem = AntdBreadcrumb.Item;

function BreadcrumbItem({
  className = '', children, onClick, ...otherProps
}: BreadcrumbItemProps) {
  const css = classNames({
    'coo-breadcrumb__item--clickable': onClick,
  });

  return (
    <AntdBreadcrumbItem
      className={`coo-breadcrumb__item ${css} ${className}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </AntdBreadcrumbItem>
  );
}

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;
