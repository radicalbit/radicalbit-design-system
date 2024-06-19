import AntdList, { ListProps } from 'antd/lib/list';
import classNames from 'classnames';

type Props<T> = ListProps<T> & { type?: 'smooth' };

function List<T>({ type, ...other }: Props<T>) {
  const css = classNames({
    [`l-list--type-${type}`]: type,
  });

  return <AntdList className={`l-list ${css}`} {...other} />;
}

List.Item = AntdList.Item;
List.displayName = 'List';

export default List;
