import AntdTransfer, { TransferItem, TransferProps } from 'antd/es/transfer';
import classNames from 'classnames';

export interface Props<T extends TransferItem> extends TransferProps<T>{
    alignOperation?: 'flex-start'
    headerType?: 'light'
    modifier?: string
    type?: 'right-secondary' | ''
    wideMode?: boolean
}

const Transfer = <T extends TransferItem>({
  alignOperation,
  className = '',
  headerType,
  modifier = '',
  type,
  wideMode = true,
  ...otherProps
}: Props<T>) => {
  const cssClass = classNames({
    [`c-transfert__${type}`]: type,
    [`c-transfert--alignOperation-${alignOperation}`]: alignOperation,
    [`c-transfert__header--${headerType}`]: headerType,
    'c-transfert--wide': wideMode,
  });

  return (
    <AntdTransfer
      className={`c-transfert ${cssClass} ${modifier} ${className}`}
      {...otherProps}
    />
  );
};

Transfer.displayName = 'Transfer';

export default Transfer;
