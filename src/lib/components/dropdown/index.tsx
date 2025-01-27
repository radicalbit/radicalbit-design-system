import AntdDropdown, { DropdownProps } from 'antd/es/dropdown';
import classNames from 'classnames';

type Props = DropdownProps & {
  modifier?: string;
};

const Dropdown = ({
  className = '',
  modifier = '',
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
