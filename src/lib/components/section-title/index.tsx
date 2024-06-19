import classNames from 'classnames';
import { memo } from 'react';

export type Counter = {
  active: number | string;
  title: string;
  total: number;
};

type Props = {
  icon?: React.ReactNode;
  iconAlign?: 'start' | 'end' | 'center';
  modifier?: string;
  onClick?: () => void;
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
  titleSuffix?: React.ReactNode;
  wrapTitle?: boolean;
  propsEllipsis?: boolean;
  type?: 'one-line';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  titleWeight?: 'light' | 'normal' | 'bold';
  titleColor?: 'primary';
  align?: 'center' | 'right';
  reverse?: boolean;
  hoverable?: boolean;
};

const SectionTitle = (props: Props) => {
  const {
    align,
    hoverable = false,
    icon,
    iconAlign,
    modifier = '',
    onClick,
    propsEllipsis = false,
    reverse = false,
    size,
    subtitle,
    title,
    titleSuffix,
    titleWeight,
    titleColor,
    type,
    wrapTitle = false,
    ...others
  } = props;
  const css = classNames({
    'c-section-title--clickable': !!onClick,
    [`c-section-title--size-${size}`]: size,
    [`c-section-title--type-${type}`]: type,
    [`c-section-title--align-${align}`]: align,
    'c-section-title--reverse': reverse,
  });

  const cssTitle = classNames({
    [`c-section-title__title--weight-${titleWeight}`]: titleWeight,
    [`c-section-title__title--color-${titleColor}`]: titleColor,
    'c-section-title__title--hoverable': hoverable,
  });

  const cssProps = classNames({
    'c-section-title__props--ellipsis': propsEllipsis,
  });

  const cssText = classNames({
    [`c-section-title__title-text--align-${align}`]: align,
  });

  const cssEllipsis = classNames({
    ellipsis: !wrapTitle,
  });

  const cssIcon = classNames({
    [`c-section-title__title-icon--align-${iconAlign}`]: iconAlign,
  });

  return (
    <div
      className={`c-section-title ${css} ${modifier}`}
      onClick={onClick}
      role="presentation"
      {...others}
    >
      <div className={`c-section-title__title ${cssTitle}`}>
        <div
          className={`c-section-title__title-text ${cssEllipsis} ${cssText}`}
        >
          {title}
        </div>

        {titleSuffix && (
          <div className="c-section-title__title-suffix">{titleSuffix}</div>
        )}

        {icon && (
          <div className={`c-section-title__title-icon ${cssIcon}`}>{icon}</div>
        )}
      </div>

      {subtitle && (
        <div className={`c-section-title__props ${cssProps}`}>
          <span className={`${cssEllipsis} ${cssText}`}>{subtitle}</span>
        </div>
      )}
    </div>
  );
};

SectionTitle.displayName = 'SectionTitle';

export default memo<Props>(SectionTitle);
