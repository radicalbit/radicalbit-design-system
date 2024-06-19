import AntdSpin, { SpinProps } from 'antd/lib/spin';
import { memo } from 'react';

const Spin = (props: SpinProps) => {
  const {
    size, spinning, indicator, delay, tip, ...otherProps
  } = props;

  const showSpinner = spinning === undefined ? false : spinning;

  return (
    <AntdSpin
      size={size}
      spinning={showSpinner}
      indicator={indicator}
      delay={delay}
      tip={tip}
      className="rdb-spin"
      {...otherProps}
    />
  );
};

Spin.displayName = 'Spin';

export default memo(Spin);
