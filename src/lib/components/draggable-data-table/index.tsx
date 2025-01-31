import {
  ConnectDragSource,
  ConnectDropTarget,
  DndProvider, DragSource, DropTarget, DropTargetSpec,
} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { memo, useRef } from 'react';
import { TableProps } from 'antd';
import { DataTable } from '../data-table';
import { DataTableProps } from '../data-table/DataTable';

type RowPropsType = ReturnType<NonNullable<TableProps<unknown>['onRow']>> & {
  index: number;
  moveRow: (dragIndex: number, hoverIndex: number) => void;
};

type BodyRowPropsType = RowPropsType & {
  isOver: boolean;
  connectDragSource: ConnectDragSource;
  connectDropTarget: ConnectDropTarget;
};

type Props<T extends Record<string, unknown>> = DataTableProps<T> & {
  onMoveRowCallback: (data: T[]) => void;
};

type DragObject = {
  index: number
}

const rowTarget: DropTargetSpec<RowPropsType, DragObject, void> = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    props.moveRow(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  },
};

const DraggableDataTable = <T extends Record<string, unknown>>({
  className = '',
  dataSource,
  modifier = '',
  onMoveRowCallback,
  ...otherProps
}: Props<T>) => {
  const draggingIndex = useRef(-1);
  const BodyRow = ({
    isOver, connectDragSource, connectDropTarget, ...restProps
  }: BodyRowPropsType) => {
    const { className, index } = restProps;

    const isDraggingDownward = index > draggingIndex.current;
    const isDraggingUpward = index < draggingIndex.current;

    const isOverClassName = isDraggingDownward
      ? `${className} drop-over-downward`
      : isDraggingUpward
        ? `${className} drop-over-upward`
        : className;

    const realClassName = isOver
      ? isOverClassName
      : className;

    return connectDragSource(
      connectDropTarget(<tr {...restProps} className={realClassName} />),
    );
  };

  const rowSource = {
    beginDrag({ index }: DragObject) {
      draggingIndex.current = index;
      return {
        index,
      };
    },
  };

  const dropTarget = DropTarget('row', rowTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  }));

  const dragSource = DragSource('row', rowSource, (connect) => ({
    connectDragSource: connect.dragSource(),
  }));

  const draggableBodyRow = dropTarget(dragSource(BodyRow));

  const components = {
    body: {
      row: draggableBodyRow,
    },
  };

  const moveRow = (dragIndex: number, hoverIndex: number) => {
    const dragRow = dataSource[dragIndex];
    const updatedData = update(dataSource, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragRow],
      ],
    });

    onMoveRowCallback(updatedData);
  };

  const onRow = ((__: unknown, index: number): RowPropsType => ({
    index,
    moveRow,
    // moveRow and index are not included in onRowtypes of antd library.
    // They're custom props set before using typescript in this project. After the ts transition we should check if we can do it in a better way
    // For this reason we need to type cast it
  })) as TableProps<T>['onRow'];

  return (
    <DndProvider backend={HTML5Backend}>
      <DataTable
        modifier={`l-data-table--draggable ${modifier} ${className}`}
        onRow={onRow}
        dataSource={dataSource}
        components={components}
        {...otherProps}
      />
    </DndProvider>
  );
};

export default memo(DraggableDataTable);
