import AntdInput, { InputProps, InputRef } from 'antd/lib/input';
import classNames from 'classnames';
import { Ref, forwardRef } from 'react';
import Skeleton from '@Components/skeleton';

type Props = InputProps & {
  className?: string;
  modifier?: string;
  readOnly?: boolean;
  blank?: boolean;
  shape?: 'round';
  bordersStyle?: 'dashed';
  value?: string;
  skeleton?: boolean,
}

const Input = forwardRef(({
  disabled,
  className = '',
  modifier = '',
  readOnly,
  blank,
  shape,
  bordersStyle,
  value,
  skeleton,
  ...others
}: Props,
ref: Ref<InputRef>) => {
  const css = classNames({
    'c-input--readonly': readOnly,
    [`c-input--shape-${shape}`]: shape,
    [`c-input--borders-${bordersStyle}`]: bordersStyle,
    'c-input--blank': blank,
  });

  const valueOrElse = readOnly ? value || '--' : value;

  if (skeleton) {
    return (<Skeleton.Input active block></Skeleton.Input>);
  }

  // Needed to allow uncontrolled <Input /> that must not have the value field into the JSON prop (i.e. value: undefined is not uncontrolled)
  if (valueOrElse === undefined) {
    return (
      <AntdInput
        ref={ref}
        {...others}
        disabled={disabled || readOnly || blank}
        className={`c-input ${css} ${modifier} ${className}`}
      />
    );
  }

  return (
    <AntdInput
      ref={ref}
      {...others}
      disabled={disabled || readOnly || blank}
      className={`c-input ${css} ${modifier} ${className}`}
      value={valueOrElse}
    />
  );
});

Input.displayName = 'Input';

export default Input;
