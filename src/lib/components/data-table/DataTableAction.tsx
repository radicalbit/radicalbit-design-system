import classNames from 'classnames';

const DataTableAction = ({
  className = '',
  children,
  modifier = '',
  noHide,
  ...other
}: {
    className?: string
    children: React.ReactNode;
    modifier?: string;
    noHide?: string;
  }) => {
  const css = classNames({
    'l-data-table__action--noHide': noHide,
  });
  
  const handleOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  return (
    <div
      role="presentation"
      className={`l-data-table__action ${css} ${modifier} ${className}`}
      onClick={handleOnClick}
      {...other}
    >
      {children}
    </div>
  );
};

DataTableAction.displayName = 'DataTableAction';

export default DataTableAction;
