import AntdTag, { TagProps } from 'antd/lib/tag';
import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = TagProps & {
  disabled?: boolean;
  fullWidth?: boolean;
  modifier?: string;
  size?: 'small' | 'large' | 'xl' | 'xxl';
  suffix?: string | ReactNode;
  suffixWithLink?: boolean;
  type?:
    | 'animated'
    | 'dashed-secondary'
    | 'dashed'
    | 'error-light'
    | 'error'
    | 'full'
    | 'highlighted'
    | 'secondary-light'
    | 'secondary'
    | 'text'
    | 'warning-light'
    | 'warning';
  uppercase?: boolean;
  mode?:'text' // will be replace type="text"
};

const Tag = ({
  children,
  disabled = false,
  fullWidth = false,
  modifier = '',
  onClick,
  prefix,
  size,
  suffix,
  suffixWithLink = false,
  type,
  mode,
  uppercase = false,
  ...others
}: Props) => {
  const css = classNames({
    'c-tag--clickable': onClick,
    [`c-tag--${size}`]: size,
    [`c-tag--${type}`]: type,
    [`c-tag__mode--${mode}`]: mode,
    'c-tag--full-width': fullWidth,
    'c-tag--disabled': disabled,
    'c-tag--suffixWithLink': suffixWithLink,
    'c-tag--uppercase': uppercase,
  });

  /*
      className must be the last to avoid unwanted override
      e.g <Tooltip><Tag/></Tooltip>, antd tooltip change children className
    */
  const props = {
    ...others,
    className: `c-tag ${css} ${modifier}`,
  };

  return (
    <AntdTag onClick={onClick} {...props}>
      {prefix && <div className="c-tag__prefix">{prefix}</div>}

      {children}

      {suffix && <div className="c-tag__suffix">{suffix}</div>}
    </AntdTag>
  );
};

Tag.displayName = 'Tag';

export default Tag;
