import classNames from 'classnames';

export type Props = {
  children: React.ReactNode;
  className: string,
  modifier: string,
  noHide?: string;
}
const DataTableAction = ({
  children,
  className = '',
  modifier = '',
  noHide,
  ...other
}:Props) => {
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
