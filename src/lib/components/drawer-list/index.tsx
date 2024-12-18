import { DataTable } from '@Components/data-table';
import Drawer from '@Components/drawer';
import classNames from 'classnames';
import { memo } from 'react';

export type List<T extends Record<string, unknown>> = {
  activeRow: (record: T) => void;
  dataSource: T[];
  columns: T[];
  rowKey?: string;
  onRowClick?: (record: T) => void;
};

type Props<T extends Record<string, unknown>> = {
  className?: string;
  header: React.ReactNode;
  list: List<T>;
  loading: boolean;
  mask: boolean;
  mode?: 'light' | 'dark';
  modifier?: string;
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
  open: boolean;
  width?: number;
};

const DrawerList = <T extends Record<string, unknown>, >({
  className = '',
  header,
  list: { onRowClick, ...dataTableProps },
  loading = false,
  mask = false,
  mode = 'light',
  modifier = '',
  open = false,
  width = 520,
  ...others
}: Props<T>) => {
  const css = classNames({
    [`c-drawer-list__wrapper--${mode}`]: mode,
  });

  return (
    <Drawer
      modifier={`c-drawer-list__wrapper ${
        !mask ? 'c-drawer--transparent-mask' : ''
      } ${modifier} ${mode} ${css} ${className}`}
      title={header}
      open={open}
      closable={false}
      width={width}
      {...others}
    >
      <DataTable
        loading={loading}
        pagination={false}
        clickable={!!onRowClick}
        onRow={(record) => ({
          onClick: () => (onRowClick ? onRowClick(record) : undefined),
        })}
        {...dataTableProps}
      />
    </Drawer>
  );
};

DrawerList.displayName = 'DrawerList';

export default memo(DrawerList);
