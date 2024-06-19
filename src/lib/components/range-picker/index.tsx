import { memo, useState } from 'react';
import AntdDatePicker from 'antd/lib/date-picker';
import classNames from 'classnames';
import { RangePickerProps } from 'antd/lib/date-picker/generatePicker';
import { Moment } from 'moment';
import { Skeleton } from 'antd';

const { RangePicker: AntdRangePicker } = AntdDatePicker;
type Props = RangePickerProps<Moment> & {
  allowClear?: boolean;
  dateFormat?: string;
  modifier?: string;
  openOnHover?: boolean;
  readOnly?: boolean;
  skeleton?: boolean
};

const RangePicker = ({
  allowClear = true,
  dateFormat = 'DD-MM-YYYY',
  modifier = '',
  openOnHover = false,
  readOnly,
  skeleton,
  ...others
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const checkTarget = (event: Event) => {
    if (!openOnHover) return;

    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'input') {
      target.removeEventListener('mousemove', checkTarget);
      setIsOpen(true);
    }
  };

  const inputMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!openOnHover) return;
    event.target.addEventListener('mousemove', checkTarget);
  };
  const inputMouseLeave = () => setIsOpen(false);

  const css = classNames({
    'c-input--readonly': readOnly,
  });

  if (skeleton) {
    return (<Skeleton.Input block active></Skeleton.Input>);
  }
  
  return (
    <AntdRangePicker
      className={`c-range-picker ${css} ${modifier}`}
      allowClear={allowClear}
      onMouseEnter={inputMouseEnter}
      onMouseLeave={inputMouseLeave}
      format={dateFormat}
      {...(openOnHover ? { open: isOpen } : undefined)}
      {...others}
    />
  );
};

RangePicker.displayName = 'RangePicker';

export default memo<Props>(RangePicker);
