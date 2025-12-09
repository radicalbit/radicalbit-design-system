import FontAwesomeIcon from '@Components/font-awesome-icon';
import Button from '@Components/button';
import Tooltip from '@Components/tooltip';
import {
  faChevronUp,
  faChevronDown,
  faUndo,
  faCopy,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import {
  ExpandCollapseAll,
  GetItemString,
  JSONTree,
} from '@lucataglia/react-json-tree';
import React, { CSSProperties, memo } from 'react';

type Props<T> = {
  className?: string,
  data: T;
  expandCollapseAll?: ExpandCollapseAll;
  expandUntil?: number;
  itemStringMaxFields?: number;
  modifier?: string,
  styles?: CSSProperties,
};

function getItemString<T>(
  _itemStringMaxFields: NonNullable<Props<T>['itemStringMaxFields']>
) {
  const callBack: GetItemString = (type, data, _, __, ___, isExpanded) => {
    if (isExpanded) {
      return false;
    }

    if (type === 'Object' && typeof data === 'object' && data) {
      return (
        <span>
          {'{ '}

          {Object.entries(data).reduce((acc, [key, value], i) => {
            if (i === 0) {
              return `${key}: ${getSecondLevelItemString(typeof value, value)}`;
            }

            if (i >= 1 && i <= _itemStringMaxFields - 1) {
              return `${acc}, ${key}: ${getSecondLevelItemString(
                typeof value,
                value
              )}`;
            }

            if (i === _itemStringMaxFields) {
              return `${acc}, ...`;
            }

            return acc;
          }, '')}

          {' }'}
        </span>
      );
    }

    if (type === 'Array' && Array.isArray(data)) {
      return (
        <span>
          {'[ '}

          {data.reduce((acc, value, i) => {
            if (i === 0) {
              return `${getSecondLevelItemString(typeof value, value)}`;
            }

            if (i >= 1 && i <= _itemStringMaxFields - 1) {
              return `${acc}, ${getSecondLevelItemString(typeof value, value)}`;
            }

            if (i === _itemStringMaxFields) {
              return `${acc}, ...`;
            }

            return acc;
          }, '')}

          {' ]'}
        </span>
      );
    }

    return <span>{JSON.stringify(data)}</span>;
  };
  return callBack;
}

const getSecondLevelItemString = (
  type: string,
  data: Record<string, unknown> | unknown[]
) => {
  switch (type) {
    case 'object':
      return '{...}';

    case 'array':
      return '[...]';

    default:
      return JSON.stringify(data);
  }
};

const defaultExpandCollapseAll = (expandUntil: number): ExpandCollapseAll => ({
  defaultValue: expandUntil === 0 ? 'expand' : 'collapse',

  expandIcon: (
    <Button
      type="secondary-light"
      size="small"
      suffix={<FontAwesomeIcon icon={faChevronDown} />}
    >
      Expand All
    </Button>
  ),

  collapseIcon: (
    <Button
      type="secondary-light"
      size="small"
      suffix={<FontAwesomeIcon icon={faChevronUp} />}
    >
      Collapse All
    </Button>
  ),

  copyToClipboardIcon: (
    <Tooltip title="Copy to clipboard">
      <Button type="secondary-light" size="small" shape="circle">
        <FontAwesomeIcon icon={faCopy} />
      </Button>
    </Tooltip>
  ),

  copiedToClipboardIcon: (
    <Tooltip title="Copied">
      <Button type="secondary-light" size="small" shape="circle">
        <FontAwesomeIcon icon={faCheck} />
      </Button>
    </Tooltip>
  ),

  defaultIcon: (
    <Tooltip title="Restore">
      <Button type="secondary-light" size="small" shape="circle">
        <FontAwesomeIcon icon={faUndo} />
      </Button>
    </Tooltip>
  ),
});

function Json<T>({
  className = '',
  data,
  expandCollapseAll,
  expandUntil = Number.MAX_SAFE_INTEGER,
  itemStringMaxFields = 7,
  modifier = '',
  styles,
  ...others
}: Props<T>) {
  const shouldExpandNodeInitially = (_: unknown, __: unknown, level: number) => level <= expandUntil;

  return (
    <div className={`c-json ${modifier} ${className}`} style={styles}>
      <JSONTree
        collectionLimit={100}
        data={data}
        expandCollapseAll={
          expandCollapseAll
            ? { ...defaultExpandCollapseAll(expandUntil), ...expandCollapseAll }
            : { ...defaultExpandCollapseAll(expandUntil) }
        }
        getItemString={getItemString(itemStringMaxFields)}
        shouldExpandNodeInitially={shouldExpandNodeInitially}
        theme={{
          base00: 'var(--coo-secondary-04)',
          extend: 'theme',
          tree: {
            border: '1px solid var(--coo-secondary-03)',
            fontFamily: 'var(--coo-monospace-font)',
            padding: '1rem',
            cursor: 'default',
            fontSize: '.8rem',
          },
          expandCollapseAll: {
            color: 'var(--coo-dark)',
          },
          label: {
            fontFamily: 'var(--coo-monospace-font)',
          },
        }}
        {...others}
      />
    </div>
  );
}

export default memo(Json);
