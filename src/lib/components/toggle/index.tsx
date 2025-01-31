import classNames from 'classnames';
import { ReactNode, useState } from 'react';

type Props = {
  checked?: boolean;
  children?: ReactNode;
  className?: string;
  defaultValue?: boolean;
  mode?: string;
  modifier?: string;
  onClick?: (value?: boolean) => void;
};

function Toggle({
  checked: controlled,
  children,
  className = '',
  defaultValue,
  mode = 'dark',
  modifier = '',
  onClick,
  ...others
}: Props) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);

  // If controlled 'checked' always wins
  const value = controlled ?? uncontrolled;

  const css = classNames({
    'c-toggle--checked': value,
    'c-toggle--unchecked': !value,
  });

  const handleOnClick = () => {
    if (onClick) {
      onClick(value);
    }

    // If uncontrolled update state
    if (controlled === undefined) {
      setUncontrolled(!value);
    }
  };

  return (
    <div
      className={`c-toggle ${css} ${mode} ${className} ${modifier}`}
      onClick={handleOnClick}
      role="presentation"
      {...others}
    >
      {children}
    </div>
  );
}

Toggle.displayName = 'Toggle';

export default Toggle;
