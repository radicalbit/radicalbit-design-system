import AntdSpin, { SpinProps } from 'antd/lib/spin';
import { memo } from 'react';

export interface Props extends SpinProps {
  modifier?: string;
}

const Spin = ({
  className = '',
  modifier = '',
  spinning,
  ...otherProps
}: Props) => {
  const showSpinner = spinning === undefined ? false : spinning;

  return (
    <AntdSpin
      spinning={showSpinner}
      className={`rdb-spin ${modifier} ${className}`}
      {...otherProps}
    />
  );
};

Spin.displayName = 'Spin';

export default memo(Spin);
