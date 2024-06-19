import AntdDropdown, { DropdownProps } from 'antd/lib/dropdown';
import classNames from 'classnames';

type Props = DropdownProps & {
  trigger?: string;
};

const Dropdown = (props: Props) => {
  const {
    overlay, placement, disabled, children, trigger, ...others
  } = props;

  const cssChild = classNames({
    'c-dropdown__child--clickable': trigger === 'click',
  });

  return (
    <AntdDropdown
      overlay={overlay}
      placement={placement}
      disabled={disabled}
      overlayClassName="c-dropdown"
      trigger={trigger}
      {...others}
    >
      <div className={`c-dropdown__child ${cssChild}`}>{children}</div>
    </AntdDropdown>
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
