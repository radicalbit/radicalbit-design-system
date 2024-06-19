import { MutableRefObject, ReactElement, useEffect } from 'react';

type DraggableDividerProps = {
    bottom?: ReactElement;
    bottomRef?: MutableRefObject<HTMLDivElement | null>;
    top?: ReactElement;
    topRef?: MutableRefObject<HTMLDivElement | null>;
    resizableRef: MutableRefObject<HTMLDivElement | null>;
  };

function DraggableDivider({
  bottom,
  bottomRef,
  top,
  topRef,
  resizableRef,
}: DraggableDividerProps) {
  useEffect(() => {
    if (!resizableRef?.current) return;
    if (!bottom) {
      resizableRef.current.style.setProperty('grid-template-rows', '');
    }
  }, [bottom, resizableRef]);
  
  return bottom && top ? (
    <div
      role="presentation"
      className="l-resizable__divider"
      onMouseDown={({ clientY: initClientY }) => {
        if (!topRef?.current || !bottomRef?.current) {
          return;
        }
  
        let dragY = initClientY;
        const initOffset = topRef.current.offsetHeight + bottomRef.current.offsetHeight;
  
        window.document.onmousemove = ({ clientY }) => {
          if (!topRef.current || !bottomRef.current || !resizableRef?.current) {
            return;
          }
          const newTopOffset = topRef.current.offsetHeight + clientY - dragY;
            
          resizableRef.current.style.setProperty('grid-template-rows', `${newTopOffset}px 0.5% ${initOffset - newTopOffset}px`);
  
          dragY = clientY;
        };
  
        window.document.onmouseup = () => {
          window.document.onmousemove = null;
          window.document.onmouseup = null;
        };
      }}
      onMouseUp={() => {
        window.document.onmousemove = null;
        window.document.onmouseup = null;
      }}
    />
  ) : (
    <></>
  );
}

export default DraggableDivider;
