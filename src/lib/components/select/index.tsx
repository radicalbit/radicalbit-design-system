import AntdSelect, { SelectProps } from 'antd/lib/select';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Skeleton from '@Components/skeleton';
import { ScrollTo } from 'rc-tree/lib/interface';

export type Props = SelectProps & {
  asTag?: boolean;
  modifier?: string;
  noBorder?: boolean;
  readOnly?: boolean;
  skeleton?: boolean,
  suffixIcon?: React.ReactNode;
  value?: string;
  minWidth?: number | string;
  ref?: React.RefObject<{
    focus: () => void;
    blur: () => void;
    scrollTo: ScrollTo;
  }>;
};

const Select = ({
  asTag,
  children,
  className = '',
  disabled,
  modifier = '',
  noBorder = false,
  readOnly,
  suffixIcon = (
    <FontAwesomeIcon icon={faAngleDown} className="c-select-arrow" />
  ),
  value,
  minWidth,
  ref,
  removeIcon,
  skeleton,
  ...others
}: Props) => {
  const css = classNames({
    'c-select--readonly': readOnly,
    'c-select--as-tag': asTag,
    'c-select--no-border': noBorder,
  });

  const valueOrElse = readOnly ? value ?? '--' : value;

  const removeIconOrElse = readOnly ? false : removeIcon;

  const style = minWidth ? { minWidth } : {};

  if (skeleton) {
    return (<Skeleton.Input active block></Skeleton.Input>);
  }

  return (
    <AntdSelect
      ref={ref}
      disabled={disabled}
      className={`c-select ${css} ${modifier} ${className}`}
      suffixIcon={suffixIcon}
      value={valueOrElse}
      removeIcon={removeIconOrElse}
      style={style}
      {...others}
    >
      {children}
    </AntdSelect>
  );
};

const { Option } = AntdSelect;

Select.displayName = 'Select';

Select.Option = Option;

export { Option };
export default Select;
