import React, {
  JSX,
  useCallback, useEffect, useRef, useState,
} from 'react';

const MIN_WIDTH = 300;
const MAX_WIDTH = 1000;

function RightColumnResizer() : JSX.Element {
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
      onMouseDown={onMouseDown}
      ref={parentRef}
      style={{
        position: 'fixed',
        top: 0,
        right: 'calc(var(--coo-right-sidebar-width, 320px) - 10px)',
        height: '100vh',
        width: '20px',
        cursor: 'col-resize',
        zIndex: 9999,
        userSelect: isDragging ? 'none' : 'auto',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      title="Drag to resize sidebar width"
    >
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '1px',
          backgroundColor: isDragging ? '#1890ffaa' : '#ddd',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Left handle */}
        <div
          style={{
            width: '24px',
            height: '40px',
            cursor: 'col-resize',
            borderRadius: '20px',
            backgroundColor: isDragging ? 'var(--coo-primary)' : '#aaa',
            transition: 'background-color 0.3s ease',
            position: 'relative',
            left: '-4px',
            boxShadow: '0 0 4px rgba(0,0,0,0.15)',
          }}
        />

        {/* Right handle */}
        <div
          style={{
            width: '24px',
            height: '40px',
            cursor: 'col-resize',
            borderRadius: '20px',
            backgroundColor: isDragging ? 'var(--coo-primary)' : '#aaa',
            transition: 'background-color 0.3s ease',
            position: 'relative',
            left: '4px',
            boxShadow: '0 0 4px rgba(0,0,0,0.15)',
          }}
        />
      </div>
    </div>
  );
}

export default RightColumnResizer;
