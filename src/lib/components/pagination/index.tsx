import { PropsWithChildren, ReactNode } from 'react';
import AntdPagination, { PaginationProps } from 'antd/lib/pagination';

export interface Props extends PropsWithChildren<PaginationProps> {
  children?: ReactNode;
  showSizeChanger?: boolean;
  onShowSizeChange?: (current: number, size: number) => void;
  onChange?: (page: number) => void;
  current?: number;
  defaultCurrent?: number;
  total?: number;
}

const Pagination = (props: Props) => {
  const {
    showSizeChanger,
    onShowSizeChange,
    onChange,
    current,
    defaultCurrent,
    total,
    ...others
  } = props;

  return (
    <AntdPagination
      showSizeChanger={showSizeChanger}
      onShowSizeChange={onShowSizeChange}
      onChange={onChange}
      current={current}
      defaultCurrent={defaultCurrent}
      total={total}
      className="rdb-pagination"
      {...others}
    />
  );
};

Pagination.defaultProps = {
  showSizeChanger: true,
};

Pagination.displayName = 'Pagination';

export default Pagination;
