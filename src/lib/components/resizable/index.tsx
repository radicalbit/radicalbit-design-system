import usePersistScrollPosition from '@Src/hooks/usePersistScrollPosition';
import classNames from 'classnames';
import React, { ReactElement, memo, useRef } from 'react';
import reactIs from 'react-is';
import DraggableDivider from './DraggableDivider';

type Props = {
  bottom?: ReactElement;
  className?: string;
  modifier?: string;
  top?: ReactElement;
};

const Resizable = ({
  bottom, className = '', modifier = '', top,
}: Props) => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const resizableRef = useRef(null);

  const css = classNames({
    'l-resizable--bottom-closed':
      !bottom || (reactIs.isFragment(bottom) && !bottom?.props?.children),
  });

  usePersistScrollPosition(topRef, [top, bottom]);

  return (
    <div ref={resizableRef} className={`l-resizable ${css} ${modifier} ${className}`}>
      {top && (
        <div className="l-resizable__top" ref={topRef}>
          {top}
        </div>
      )}

      <DraggableDivider
        bottom={bottom}
        bottomRef={bottomRef}
        top={top}
        topRef={topRef}
        resizableRef={resizableRef}
      />

      {bottom && (
        <div className="l-resizable__bottom" ref={bottomRef}>
          {bottom}
        </div>
      )}
    </div>
  );
};

Resizable.displayName = 'Resizable';

export default memo(Resizable);
