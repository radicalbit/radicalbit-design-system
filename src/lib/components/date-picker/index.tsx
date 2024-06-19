import AntdDatePicker, { DatePickerProps } from 'antd/lib/date-picker';
import classNames from 'classnames';
import Skeleton from '@Components/skeleton';
import { memo } from 'react';

type Props = DatePickerProps & {
  modifier?: string;
  readOnly?: boolean;
  skeleton?: boolean,
};

const DatePicker = ({
  modifier = '',
  readOnly = false,
  skeleton,
  value,
  ...others
}: Props) => {
  const css = classNames({
    'c-datepicker--readonly': readOnly,
  });

  if (skeleton) {
    return (<Skeleton.Input active block></Skeleton.Input>);
  }

  if (readOnly) {
    return (
      <AntdDatePicker
        className={`c-datepicker ${css} ${modifier}`}
        value={value}
        open={false}
        {...others}
      />
    );
  }

  return (
    <AntdDatePicker
      className={`c-datepicker ${css} ${modifier}`}
      value={value}
      {...others}
    />
  );
};

DatePicker.displayName = 'DatePicker';

export default memo<Props>(DatePicker);
