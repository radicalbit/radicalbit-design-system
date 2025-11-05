import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  modifier?: string;
  noHide?: boolean;
  noClickable?: boolean;
}
const DataTableAction = ({
  className = '',
  children,
  modifier = '',
  noHide,
  noClickable,
  ...other
}: Props) => {
  const css = classNames({
    'l-data-table__action--no-hide': noHide,
    'l-data-table__action--no-clickable': noClickable,
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
