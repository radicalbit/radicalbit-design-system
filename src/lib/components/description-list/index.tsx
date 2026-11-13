import classNames from 'classnames';
import {
  CSSProperties, HTMLAttributes, ReactNode, memo,
} from 'react';

export interface DescriptionListItem {
  title: ReactNode;
  value: ReactNode;
}

interface Props extends HTMLAttributes<HTMLDListElement> {
  className?: string;
  columns?: number;
  items: DescriptionListItem[];
  layout?: 'inline' | 'stacked';
  modifier?: string;
  noMargin?: boolean;
  withBorder?: boolean;
}

function DescriptionList({
  className = '',
  columns = 1,
  items,
  layout = 'inline',
  modifier = '',
  noMargin = false,
  style,
  withBorder = false,
  ...others
}: Props) {
  const css = classNames({
    [`c-description-list--layout-${layout}`]: layout,
    'c-description-list--border': withBorder,
    'c-description-list--no-margin': noMargin,
  });

  const cssStyle = { '--c-description-list-columns': columns, ...style } as CSSProperties;

  return (
    <dl className={`c-description-list ${css} ${modifier} ${className}`} style={cssStyle} {...others}>
      {items.map((item: DescriptionListItem, index: number) => (
        <div className="c-description-list__item" key={index}>
          <dt className="c-description-list__title">{item.title}</dt>

          <dd className="c-description-list__value">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

DescriptionList.displayName = 'DescriptionList';

export default memo<Props>(DescriptionList);
