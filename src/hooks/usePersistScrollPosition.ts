import {
  MutableRefObject,
  useEffect, useLayoutEffect, useRef,
} from 'react';

type PositionRef = MutableRefObject<{
  x: number;
  y: number;
}>

type HTMLElmentRef = MutableRefObject<HTMLElement | null>

/*
  usePersistScrollPosition takes track of element scroll position,
  whenever deps change, element scroll is set to the last position (in order to avoid scroll reset to zero)
*/
export default (elementRef: HTMLElmentRef, deps: Array<unknown>) => {
  const positionRef = useRef({ x: 0, y: 0 });

  useSaveScrollPosition(elementRef, positionRef);
  useRollbackScrollPosition(elementRef, positionRef, deps);
};

const useSaveScrollPosition = (elementRef: HTMLElmentRef, positionRef: PositionRef) => {
  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    const handleScroll = () => {
      const currPos = { x: element.scrollLeft, y: element.scrollTop };
      positionRef.current = currPos;
    };

    element.addEventListener('scroll', handleScroll);

    return () => element.removeEventListener('scroll', handleScroll);
  }, [elementRef, positionRef]);
};

/**
 *  Re-render reset the scroll, that's why we set back the scroll to the previos value
 */
const useRollbackScrollPosition = (elementRef: HTMLElmentRef, positionRef: PositionRef, deps: Array<unknown>) => {
  useLayoutEffect(() => {
    if (!elementRef.current) {
      return;
    }
    
    elementRef.current.scrollTo(positionRef.current.x, positionRef.current.y);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, elementRef]);
};
