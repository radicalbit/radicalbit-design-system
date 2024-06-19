import Switch from '@Lib/components/switch';
import classNames from 'classnames';
import Skeleton from '@Components/skeleton';
import { memo } from 'react';

type Props = {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  modifier?: string;
  onChange?: (value: boolean) => void;
  skeleton?: boolean,
  readOnly?: string;
};

const Switchbox = ({
  checked = false,
  className = '',
  disabled,
  label,
  modifier = '',
  onChange,
  readOnly,
  skeleton,
  ...others
}: Props) => {
  const handleOnClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const css = classNames({
    'c-switchbox--readonly': readOnly,
    'c-switchbox--disabled': disabled,
  });

  if (skeleton) {
    return <Skeleton.Button shape="round" active></Skeleton.Button>;
  }

  return (
    <div
      className={`c-switchbox ${css} ${modifier} ${className}`}
      onClick={handleOnClick}
      role="presentation"
    >
      {label && <span className="c-switchbox__label">{label}</span>}

      <Switch
        className="c-switchbox__box"
        disabled={disabled || !!readOnly}
        checked={checked}
        onChange={onChange}
        {...others}
      />
    </div>
  );
};

Switchbox.displayName = 'Switchbox';

export default memo<Props>(Switchbox);
