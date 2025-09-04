import React, {
  JSX,
  useCallback, useEffect, useRef, useState,
} from 'react';

const MIN_WIDTH = 300;
const MAX_WIDTH = 1000;

function RightColumnResizer(props: React.HTMLAttributes<HTMLDivElement>) : JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const newWidth = window.innerWidth - e.clientX;

      if (newWidth >= MIN_WIDTH && newWidth <= MAX_WIDTH) {
        document.documentElement.style.setProperty(
          '--coo-right-sidebar-width',
          `${newWidth}px`
        );
      }
    },
    [isDragging]
  );

  const stopDragging = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mouseleave', stopDragging);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('mouseleave', stopDragging);
    };
  }, [onMouseMove, stopDragging]);

  return (
    <div
      role="presentation"
      className={`c-right-column-resizer ${isDragging ? 'is-dragging' : ''}`}
      onMouseDown={onMouseDown}
      ref={parentRef}
      {...props}
    >
      <div className={`c-right-column-resizer__vertical ${isDragging ? 'is-dragging' : ''}`}>
        <div className={`c-right-column-resizer__left ${isDragging ? 'is-dragging' : ''}`} />
        <div className={`c-right-column-resizer__right ${isDragging ? 'is-dragging' : ''}`} />
      </div>
    </div>

  );
}

export default RightColumnResizer;
