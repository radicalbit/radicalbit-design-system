import * as React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Tooltip from '@Components/tooltip';
import { ColumnFilterItem, FilterValue, SortOrder } from 'antd/es/table/interface';
import { fromTimestamp } from '@Src/utils/fromTimestamp';

dayjs.extend(relativeTime);

const numberOfDaysToUseRelativeDate = 3;
const STANDARD_COLUMNS = {
  createdAt: 'createdAt',
  lastUpdateAt: 'lastUpdateAt',
};

export const renderDateTime = (timestamp: number) => {
  const difference = dayjs().diff(timestamp, 'day');
  const tooltipDate = fromTimestamp(timestamp);
  const dateToShow = difference <= numberOfDaysToUseRelativeDate ? dayjs(timestamp).fromNow() : fromTimestamp(timestamp).substring(0, 10);

  return (
    <Tooltip title={tooltipDate}>
      {dateToShow}
    </Tooltip>
  );
};

const standardColumn = (
  keyDataIndex: { key?: string; dataIndex: string },
  title: string,
  activeSort: Record<string, SortOrder | undefined> = {},
  activeFilters: Record<string, FilterValue | null | undefined> = {},
  sorter = false,
  filters: ColumnFilterItem[] = [],
) => {
  const { dataIndex, key = dataIndex } = keyDataIndex;
  return ({
    key,
    dataIndex,
    title,
    sorter,
    defaultSortOrder: activeSort && activeSort[key],
    filters,
    filteredValue: activeFilters[key],
  });
};

export const COLUMNS = {
  name: (
    title: 'Name',
    keyDataIndex: { key?: string; dataIndex: string },
    activeSort: Record<string, SortOrder | undefined> = {},
    custom: Record<string, unknown> = {},
    sorter: boolean | ((a: unknown, b: unknown) => boolean) = true,
    width = 270,
  ) => COLUMNS
    .generic(
      title,
      keyDataIndex,
      activeSort,
      undefined,
      { ...custom, width, sorter },
    ),

  createdAt: (
    activeSort: Record<string, SortOrder | undefined> = {},
    sorter = true,
    title = 'Created',
    dataIndex: string = STANDARD_COLUMNS.createdAt,
    key: string = STANDARD_COLUMNS.createdAt,
  ) => COLUMNS
    .generic(
      title,
      { dataIndex, key },
      activeSort,
      undefined,
      {
        align: 'right',
        sorter,
        width: 150,
        render: renderDateTime,
      },
    ),

  lastUpdateAt: (
    activeSort: Record<string, SortOrder | undefined> = {},
    activeFilters: Record<string, FilterValue | null | undefined> = {},
    sorter = false,
    title = 'Updated',
  ) => COLUMNS
    .generic(
      title,
      { dataIndex: STANDARD_COLUMNS.lastUpdateAt },
      activeSort,
      activeFilters,
      {
        align: 'right',
        sorter,
        width: 150,
        render: renderDateTime,
      },
    ),

  version: (
    title: string,
    keyDataIndex: { key?: string; dataIndex: string },
    activeSort: Record<string, SortOrder | undefined> = {},
    sorter = false,
    custom: Record<string, unknown> = {},
  ) => COLUMNS.generic(
    title,
    keyDataIndex,
    activeSort,
    undefined,
    {
      align: 'right',
      width: 60,
      sorter,
      ...custom,
    },
  ),

  badge: (
    title: string,
    keyDataIndex: { key?: string; dataIndex: string },
    activeSort: Record<string, SortOrder | undefined> = {},
    activeFilters: Record<string, FilterValue | null | undefined> = {},
    sorter = false,
    custom: Record<string, unknown> = {},
  ) => COLUMNS
    .generic(
      title,
      keyDataIndex,
      activeSort,
      activeFilters,
      {
        align: 'center',
        width: 60,
        sorter,
        ...custom,
      },
    ),

  // No defaults here on purpose: they would sit before a non-default
  // parameter, and standardColumn already defaults both to {}.
  generic: (
    title: string,
    keyDataIndex: { key?: string; dataIndex: string },
    activeSort: Record<string, SortOrder | undefined> | undefined,
    activeFilters: Record<string, FilterValue | null | undefined> | undefined,
    custom: Record<string, unknown>,
  ) => (
    {
      ...standardColumn(keyDataIndex, title, activeSort, activeFilters),
      ...custom,
    }
  ),
};
