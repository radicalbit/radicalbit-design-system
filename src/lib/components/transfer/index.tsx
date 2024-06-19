import AntdTransfer, { TransferItem, TransferProps } from 'antd/lib/transfer';
import classNames from 'classnames';

export interface Props<T extends TransferItem> extends TransferProps<T>{
    modifier?: string
    wideMode?: boolean
    type?: 'right-secondary' | ''
    headerType?: 'light'
    alignOperation?: 'flex-start'
}

const Transfer = <T extends TransferItem>({
  alignOperation,
  modifier = '',
  wideMode = true,
  type,
  headerType,
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
      className={`c-transfert ${cssClass} ${modifier} `}
      {...otherProps}
    />
  );
};

Transfer.displayName = 'Transfer';

export default Transfer;
