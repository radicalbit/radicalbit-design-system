import AntdSelect, { SelectProps } from 'antd/es/select';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Skeleton from '@Components/skeleton';

export type Props = SelectProps & {
  asTag?: boolean;
  modifier?: string;
  noBorder?: boolean;
  readOnly?: boolean;
  skeleton?: boolean,
  suffixIcon?: React.ReactNode;
  value?: string;
  minWidth?: number | string;
  dark?: boolean
};

const SelectComponent = ({
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
  removeIcon,
  skeleton,
  dark = false,
  ...others
}: Props) => {
  const css = classNames({
    'c-select--readonly': readOnly,
    'c-select--as-tag': asTag,
    'c-select--no-border': noBorder,
    dark,
  });

  const valueOrElse = readOnly ? value ?? '--' : value;

  const removeIconOrElse = readOnly ? false : removeIcon;

  const style = minWidth ? { minWidth } : {};

  if (skeleton) {
    return (<Skeleton.Input active block></Skeleton.Input>);
  }

  return (
    <AntdSelect
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

type TSelectComponent = typeof SelectComponent & {
  Option: typeof Option;
};

const Select = SelectComponent as TSelectComponent;
Select.Option = Option;

export { Option };
export default Select;
