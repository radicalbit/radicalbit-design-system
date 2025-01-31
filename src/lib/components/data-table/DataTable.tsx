import Badge from '@Components/badge';
import AntdTable, { TableProps } from 'antd/es/table';
import classNames from 'classnames';
import { ColumnType } from 'rc-table/lib/interface';
import {
  Fragment, ReactNode, isValidElement, useEffect, useRef,
} from 'react';

export interface DataTableProps<T extends Record<string, unknown>>
  extends TableProps<T> {
  dataSource: T[];
  className?: string;
  modifier?: string;
  noHead?: boolean;
  clickable?: boolean;
  hasFixedColumn?: boolean;
  dark?: boolean;
}

type Render<T> = ColumnType<T>['render'];

type ElementExtended = Element & {
  dataset: { rowKey: string };
  style: Record<string, number>;
};

type Listener = {
  element: ElementExtended;
  event: string;
  listener: () => void;
};

const DataTable = <T extends Record<string, unknown>>({
  className = '',
  columns,
  dataSource = [],
  modifier = '',
  noHead = false,
  onRow,
  clickable,
  dark = false,
  hasFixedColumn,
  ...otherProps
}: DataTableProps<T>) => {
  const enrichedColumns = columns?.map((c, i) => {
    const dataIndex = 'dataIndex' in c ? c.dataIndex : null;
    const enrichedRender: Render<T> = c.render
      ? (el, record, index) => {
        const badge = record[`${dataIndex}-badge`];
        const isValid = isValidElement(badge);

        return (
          <Fragment key={i}>
            {c?.render?.(el, record, index) as ReactNode}
            {isValid && <Badge count={badge} />}
          </Fragment>
        );
      }
      : (el, record) => {
        const badge = record[`${dataIndex}-badge`];
        const isValid = isValidElement(badge);

        return isValid ? <Badge count={badge} key={i}>{el}</Badge> : (
          <Fragment key={i}>
            {el}
          </Fragment>
        );
      };

    return { ...c, render: enrichedRender };
  });

  useShowActionsWithJS(!!hasFixedColumn, dataSource.length);

  const css = classNames({
    'l-data-table--no-head': noHead,
    'l-data-table--clickable': clickable,
    dark,
  });

  return (
    <AntdTable
      className={`l-data-table ${className} ${modifier} ${css}`}
      columns={enrichedColumns}
      dataSource={dataSource}
      onRow={onRow}
      {...otherProps}
    />
  );
};

const useShowActionsWithJS = (hasFixedColumn: boolean, rowCount: number) => {
  const listeners = useRef<Listener[]>([]);
  
  useEffect(() => {
    if (!hasFixedColumn) {
      return undefined;
    }
  
    const rows: NodeListOf<ElementExtended> = window.document.querySelectorAll(
      '.l-data-table .ant-table-row'
    );
  
    // *** *** *** *** *** *** *** ***
    // *** ***  ON MOUSE OVER  *** ***
    // *** *** *** *** *** *** *** ***
  
    rows.forEach((r) => {
      const listener = () => {
        const all: NodeListOf<ElementExtended> = window.document.querySelectorAll(
          `[data-row-key='${r.dataset.rowKey}']`
        );
  
        all.forEach((a) => {
          const elements: NodeListOf<ElementExtended> = a.querySelectorAll(
            '.l-data-table__action'
          );
  
          elements.forEach((action) => {
            action.style.opacity = 1;
          });
        });
      };
  
      listeners.current.push({ element: r, event: 'mouseover', listener });
  
      return r.addEventListener('mouseover', listener);
    });
  
    // *** *** *** *** *** *** *** ***
    // *** ***  ON MOUSE LEAVE *** ***
    // *** *** *** *** *** *** *** ***
  
    rows.forEach((r) => {
      const listener = () => {
        const all: NodeListOf<ElementExtended> = window.document.querySelectorAll(
          `[data-row-key='${r.dataset.rowKey}']`
        );
  
        all.forEach((a) => {
          const el: NodeListOf<ElementExtended> = a.querySelectorAll(
            '.l-data-table__action'
          );
          el.forEach((action) => {
            action.style.opacity = 0;
          });
        });
      };
  
      listeners.current.push({ element: r, event: 'mouseleave', listener });
  
      return r.addEventListener('mouseleave', listener);
    });
  
    return () => {
      listeners.current.forEach(({ element, event, listener }) => {
        element.removeEventListener(event, listener);
      });
      listeners.current = [];
    };
    // Adding rowCount as deps trigger the listener re-initialization if a new row of a <DataTable /> is added
  }, [hasFixedColumn, rowCount]);
};

DataTable.displayName = 'DataTable';

DataTable.ROW_HIGHLIGHT = 'l-data-table__row--highlighted';
DataTable.ROW_ERROR = 'l-data-table__row--error';
DataTable.ROW_NOT_CLICKABLE = 'l-data-table__row--not-clickable';
DataTable.ROW_PRIMARY_LIGHT = 'l-data-table__row--primary-light';
DataTable.ROW_SELECTED_HIGHLIGHT = 'l-data-table__row--selected-highlighted';
DataTable.ROW_SELECTED_HIGHLIGHT_SECONDARY = 'l-data-table__row--selected-highlightedSecondary';
DataTable.ROW_SELECTED_BOLD = 'l-data-table__row--selected-bold';
DataTable.ROW_DISABLED = 'l-data-table__row--disabled';
DataTable.HIDE_ROW = 'l-data-table__row--hide';

export default DataTable;
