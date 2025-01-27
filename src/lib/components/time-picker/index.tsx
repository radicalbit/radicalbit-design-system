import { memo } from 'react';
import AntdTimePicker, { TimePickerProps } from 'antd/es/time-picker';
import classNames from 'classnames';

type Props = TimePickerProps & {
  modifier?: string;
  readOnly?: boolean;
};

const TimePicker = ({
  className = '',
  modifier = '',
  readOnly,
  value,
  ...others
}: Props) => {
  const css = classNames({
    'c-input--readonly': readOnly,
  });

  const valueOrElse = readOnly ? value : undefined;

  return (
    <AntdTimePicker
      className={`c-timepicker ${css} ${modifier} ${className}`}
      value={valueOrElse}
      {...others}
    />
  );
};

TimePicker.displayName = 'TimePicker';

export default memo<Props>(TimePicker);
