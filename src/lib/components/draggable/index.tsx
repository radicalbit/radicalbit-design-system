import classNames from 'classnames';
import {
  memo, useEffect, useRef, useState,
} from 'react';

type Props = {
  children: React.ReactNode;
  className?: string,
  containerClassName?: string;
  containerRef: React.RefObject<HTMLDivElement>;
  modifier?: string,
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const handleDragStart: React.DragEventHandler = (event) => {
  const style = window.getComputedStyle(event.target as Element, null);

  const left = parseInt(style.getPropertyValue('left'), 10);
  const top = parseInt(style.getPropertyValue('top'), 10);

  event.dataTransfer.setData(
    'text/plain',
    `${left - event.clientX},${top - event.clientY}`
  );
};

const handleDrop = (event: DragEvent, ref: React.RefObject<HTMLDivElement | null>) => {
  if (!event.dataTransfer) { return false; }

  const [left, top] = event.dataTransfer.getData('text/plain').split(',');
  const elementToDrag = ref.current;

  if (elementToDrag) {
    elementToDrag.style.left = `${event.clientX + parseInt(left, 10)}px`;
    elementToDrag.style.top = `${event.clientY + parseInt(top, 10)}px`;
  }

  event.preventDefault();
  return false;
};

const handleDragOver = (event: Event) => {
  event.preventDefault();
  return false;
};

const Draggable = ({
  children,
  className = '',
  containerClassName,
  containerRef,
  modifier = '',
  onBlur,
  onMouseDown,
  ...others
}: Props) => {
  const [onFocus, setOnFocus] = useState(false);

  const css = classNames({
    'm-draggable--focus': onFocus,
  });

  const ref = useRef(null);

  useEffect(() => {
    const target = containerRef && containerRef.current ? containerRef.current : window.document;
    target.ondrop = (e: DragEvent) => handleDrop(e, ref);
    target.ondragover = handleDragOver;
    if (containerRef?.current && containerClassName) {
      containerRef.current.className = `${containerRef.current.className} ${containerClassName}`;
    }
  }, [containerClassName, containerRef]);

  const handleOnMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onMouseDown) {
      onMouseDown(e);
    }
    setOnFocus(true);
  };

  const handleOnBlur: React.FocusEventHandler<HTMLDivElement> = (e) => {
    if (onBlur) {
      onBlur(e);
    }
    setOnFocus(false);
  };

  return (
    <div
      ref={ref}
      draggable
      className={`m-draggable ${css} ${modifier} ${className}`}
      onDragStart={handleDragStart}
      onMouseDown={handleOnMouseDown}
      tabIndex={-1}
      onBlur={handleOnBlur}
      role="presentation"
      {...others}
    >
      {children}
    </div>
  );
};

Draggable.displayName = 'Draggable';

export default memo(Draggable);
