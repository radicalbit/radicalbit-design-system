import classNames from 'classnames';

const DataTableAction = ({
  children,
  noHide,
}: {
    children: React.ReactNode;
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
      className={`l-data-table__action ${css}`}
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};

DataTableAction.displayName = 'DataTableAction';

export default DataTableAction;
