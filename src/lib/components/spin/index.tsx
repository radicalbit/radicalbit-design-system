import AntdSpin, { SpinProps } from 'antd/es/spin';
import { memo } from 'react';

interface Props extends SpinProps {
  modifier?: string;
}

const Spin = ({
  className = '',
  delay,
  modifier = '',
  spinning,
  ...otherProps
}: Props) => {
  const showSpinner = spinning === undefined ? false : spinning;

  return (
    <AntdSpin
      spinning={showSpinner}
      delay={delay}
      className={`rdb-spin ${modifier} ${className}`}
      {...otherProps}
    />
  );
};

Spin.displayName = 'Spin';

export default memo(Spin);
