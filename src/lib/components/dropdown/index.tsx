import AntdDropdown, { DropdownProps } from 'antd/lib/dropdown';
import classNames from 'classnames';

export interface Props extends DropdownProps {
  modifier?: string;
}

const Dropdown = ({
  className = '',
  modifier = '',
  overlay,
  placement,
  disabled,
  children,
  trigger,
  ...others
}: Props) => {
  const clickable = Array.isArray(trigger)
    ? trigger.includes('click')
    : trigger === 'click';
  
  const cssChild = classNames({
    'c-dropdown__child--clickable': clickable,
  });

  return (
    <AntdDropdown
      overlay={overlay}
      placement={placement}
      disabled={disabled}
      overlayClassName={`c-dropdown ${modifier} ${className}`}
      trigger={trigger}
      {...others}
    >
      <div className={`c-dropdown__child ${cssChild}`}>{children}</div>
    </AntdDropdown>
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
