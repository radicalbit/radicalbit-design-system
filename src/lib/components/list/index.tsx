import AntdList, { ListProps } from 'antd/es/list';
import classNames from 'classnames';

type Props<T> = ListProps<T> & {
  className?: string;
  modifier?: string;
  type?: 'smooth'
};

function List<T>({
  className = '',
  modifier = '',
  type,
  ...other
}: Props<T>) {
  const css = classNames({
    [`l-list--type-${type}`]: type,
  });

  return <AntdList className={`l-list ${css} ${modifier} ${className}`} {...other} />;
}

List.Item = AntdList.Item;
List.displayName = 'List';

export default List;
