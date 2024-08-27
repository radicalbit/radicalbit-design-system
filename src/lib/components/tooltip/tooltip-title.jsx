import classNames from 'classnames';

function TooltipTitle({ alignItem, children }) {
  const css = classNames({
    'c-tooltip-title--align-item-custom': alignItem,
  });

  return (
    <div className={`c-tooltip-title ${css}`} style={{ '--c-tooltip-title-align-item': alignItem }}>
      {children}
    </div>
  );
}

export default TooltipTitle;
