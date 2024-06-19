import classNames from 'classnames';
import { ReactNode, useState } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
  defaultValue?: boolean;
  modifier?: string;
  mode?: string;
  onClick?: (value?: boolean) => void;
  checked?: boolean;
};

function Toggle({
  children,
  className = '',
  defaultValue,
  modifier = '',
  mode = 'dark',
  onClick,
  checked: controlled,
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
