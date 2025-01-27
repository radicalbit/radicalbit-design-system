import classNames from 'classnames';
import React from 'react';

export interface Props {
  alignItem: boolean,
  children:React.ReactNode;
  className?: string;
  modifier?: string;
}

function TooltipTitle({
  alignItem,
  children,
  className = '',
  modifier = '',
}: Props) {
  const css = classNames({
    'c-tooltip-title--align-item-custom': alignItem,
  });

  const styles = { '--c-tooltip-title-align-item': alignItem } as React.CSSProperties;

  return (
    <div className={`c-tooltip-title ${css} ${modifier} ${className}`} style={styles}>
      {children}
    </div>
  );
}

export default TooltipTitle;
