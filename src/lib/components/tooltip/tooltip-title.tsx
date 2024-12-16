import classNames from 'classnames';
import React from 'react';

export interface Props {
  alignItems: boolean,
  children:React.ReactNode;
  className?: string;
  modifier?: string;
}
function TooltipTitle({
  alignItems,
  children,
  className = '',
  modifier = '',
}: Props) {
  const css = classNames({
    'c-tooltip-title--align-item-custom': alignItems,
  });

  const styles = { '--c-tooltip-title-align-item': alignItems } as React.CSSProperties;
  
  return (
    <div className={`c-tooltip-title ${css} ${modifier} ${className}`} style={styles}>
      {children}
    </div>
  );
}

export default TooltipTitle;
