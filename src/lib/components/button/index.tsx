import AntdButton from 'antd/es/button';
import ButtonGroup from 'antd/es/button/button-group';
import { ButtonProps } from 'antd/es/button/button';
import classNames from 'classnames';
import { forwardRef, ReactNode, Ref } from 'react';

export interface Props extends Omit<ButtonProps, 'type' | 'prefix'> {
  type?:
    | ButtonProps['type']
    | 'ghost'
    | 'secondary-light'
    | 'secondary'
    | 'success'
    | 'error'
    | 'error-light'
    | 'warning'
    | 'warning-light'
    ;
  prefix?: ReactNode;
  suffix?: ReactNode;
  filled?: boolean;
  children?: ReactNode;
  modifier?: string;
}

const Button = forwardRef((props: Props, ref: Ref<HTMLButtonElement | HTMLAnchorElement>) => {
  const {
    className = '', // Needed when <Button /> is used as other Antd component child.
    prefix,
    suffix,
    filled = false,
    children,
    modifier = '',
    type,
    href,
    onClick,
    ...other
  } = props;

  const css = classNames({
    'm-button--filled': filled,
    'm-button--not-clickable': !onClick && !href,
    'm-button--ghost': type === 'ghost',
  });

  return (
    <AntdButton
      ref={ref}
      className={`m-button ${css} ${modifier} ${className}`}
      // TODO Miguel: other types such as secondary-light does not exist on Antd button
      type={type as ButtonProps['type']}
      href={href}
      onClick={onClick}
      {...other}
    >
      {prefix && <span className="m-button--prefix">{prefix}</span>}
      {children}
      {suffix && <span className="m-button--suffix">{suffix}</span>}
    </AntdButton>
  );
});

Button.displayName = 'Button';

export { ButtonGroup };
export default Button;
