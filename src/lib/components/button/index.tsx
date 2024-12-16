import AntdButton from 'antd/lib/button';
import ButtonGroup from 'antd/lib/button/button-group';
import { ButtonProps } from 'antd/lib/button/button';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

export interface Props extends Omit<ButtonProps, 'type' | 'prefix'> {
  children?: ReactNode;
  filled?: boolean;
  modifier?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  type?:
    | ButtonProps['type']
    | 'secondary-light'
    | 'secondary'
    | 'success'
    | 'error'
    | 'error-light'
    | 'warning'
    | 'warning-light'
    ;
}

const Button = (props: Props): ReactElement<typeof AntdButton> => {
  const {
    children,
    className = '', // Needed when <Button /> is used as other Antd component child
    filled = false,
    href,
    modifier = '',
    onClick,
    prefix,
    suffix,
    type,
    ...other
  } = props;

  const css = classNames({
    'm-button--filled': filled,
    'm-button--not-clickable': !onClick && !href,
  });

  return (
    <AntdButton
      className={`m-button ${css} ${modifier} ${className}`}
      // TODO Miguel: other types such as secondary-light does not exist on Antd button
      type={type as ButtonProps['type']}
      onClick={onClick}
      href={href}
      {...other}
    >
      {prefix && <span className="m-button--prefix">{prefix}</span>}
      {children}
      {suffix && <span className="m-button--suffix">{suffix}</span>}
    </AntdButton>
  );
};

Button.displayName = 'Button';

export { ButtonGroup };
export default Button;
