import {
  Group as AntRadioGroup,
  RadioGroupProps,
} from 'antd/es/radio';
import classNames from 'classnames';
  
export type GroupProps = RadioGroupProps &
  React.RefAttributes<HTMLDivElement> & {
    groupJustify?: 'center';
    modifier?: string;
    radioAlign?: 'top';
    readOnly?: boolean;
    reverse?: boolean;
    tabsLook?: boolean;
  };

const Group = ({
  className = '',
  disabled,
  groupJustify,
  modifier = '',
  radioAlign,
  readOnly,
  reverse,
  tabsLook = false,
  ...others
}: GroupProps) => {
  const css = classNames({
    'c-radio-wrapper--tabs-look': tabsLook,
    'c-radio-wrapper--reverse': reverse,
    'c-radio-wrapper--readonly': readOnly,
    [`c-radio-wrapper--radio-${radioAlign}`]: radioAlign,
    [`c-radio-wrapper--group-justify-${groupJustify}`]: groupJustify,
  });

  return (
    <AntRadioGroup
      className={`c-radio-wrapper ${css} ${modifier} ${className}`}
      disabled={disabled || readOnly}
      {...others}
    />
  );
};

Group.displayName = 'Group';

export default Group;
