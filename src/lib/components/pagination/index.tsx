import { PropsWithChildren, ReactNode } from 'react';
import AntdPagination, { PaginationProps } from 'antd/es/pagination';

export interface Props extends PropsWithChildren<PaginationProps> {
  children?: ReactNode;
  current?: number;
  defaultCurrent?: number;
  modifier?: string,
  onChange?: (page: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
  showSizeChanger?: boolean;
  total?: number;
}

const Pagination = ({
  className = '',
  current,
  defaultCurrent,
  modifier = '',
  onChange,
  onShowSizeChange,
  showSizeChanger,
  total,
  ...others
}: Props) => (
  <AntdPagination
    showSizeChanger={showSizeChanger}
    onShowSizeChange={onShowSizeChange}
    onChange={onChange}
    current={current}
    defaultCurrent={defaultCurrent}
    total={total}
    className={`rdb-pagination ${modifier} ${className}`}
    {...others}
  />
);

Pagination.defaultProps = {
  showSizeChanger: true,
};

Pagination.displayName = 'Pagination';

export default Pagination;
