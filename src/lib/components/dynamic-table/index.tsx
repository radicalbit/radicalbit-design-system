import isArray from 'lodash/isArray';
import uniq from 'lodash/uniq';
import flatten from 'lodash/flatten';
import truncate from 'lodash/truncate';
import { COLUMNS } from '@Lib/helper/columns-helper';
import Tooltip from '@Components/tooltip';
import { DataTable } from '@Components/data-table';
import { DataTableProps } from '../data-table/DataTable';

const getColumnsFromKeys = <T extends Record<string, unknown>>(dataSource: DataTableProps<T>['dataSource']) => {
  const keys = dataSource && uniq(flatten(dataSource.map((row) => Object.keys(row))));
  if (!keys) {
    return [];
  }

  return keys.map((key: string) => COLUMNS.generic(key, { dataIndex: key }, undefined, undefined, {
    render: (value: string) => (
      <Tooltip title={value}>{truncate(value, { length: 30 })}</Tooltip>
    ),
  }));
};

function getDataSource<T extends Record<string, unknown>>(dataSource: DataTableProps<T>['dataSource']) {
  if (!dataSource) {
    return [];
  }

  return dataSource.map((row) => typeof row === 'string'
    ? row
    : Object.keys(row).reduce(
      (acc, key) => {
        const isObject = (value: unknown): value is Record<string, unknown> => typeof value === 'object';
        const value = row[key];
        
        return ({
          ...acc,
          [key]:
              value
              && (isObject(value)
                ? value[Object.keys(value)[0]]
                : row[key]),
        });
      },
      {} as T
    ));
}

const DynamicTable = <T extends Record<string, unknown>>(
  props: DataTableProps<T>
) => {
  const { dataSource, pagination, ...otherProps } = props;
  const items = isArray(dataSource) ? dataSource : [dataSource];
  return (
    <DataTable
      className="table-responsive"
      pagination={pagination}
      columns={getColumnsFromKeys(items)}
      dataSource={getDataSource(items)}
      rowKey={(_, index) => `${index}`}
      {...otherProps}
    />
  );
};

DynamicTable.displayName = 'DynamicTable';

export default DynamicTable;
