import classNames from 'classnames';
import React from 'react';

type TooltipTitleProps = {
  alignItems?: string,
  children: React.ReactNode,
}

function TooltipTitle({ alignItems, children }: TooltipTitleProps) {
  const css = classNames({
    'c-tooltip-title--align-item-custom': alignItems,
  });

  const style = { '--c-tooltip-title-align-item': alignItems } as React.CSSProperties;
  
  return (
    <div className={`c-tooltip-title ${css}`} style={style}>
      {children}
    </div>
  );
}

export default TooltipTitle;
