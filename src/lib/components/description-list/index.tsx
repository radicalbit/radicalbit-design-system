import classNames from 'classnames';
import { Fragment, memo } from 'react';

type Pair = {
  title: string;
  value: string | number | boolean;
};

type Single = {
  title: string;
  value: Array<string | number | boolean>;
};

type Props = {
  className?: string,
  gridColumnCount?: number;
  list: Single | Array<Pair>;
  modifier?: string,
  noMargin?: boolean;
  withBorder?: boolean;
};

const DescriptionList = ({
  className = '',
  gridColumnCount = 3,
  list,
  modifier = '',
  noMargin,
  withBorder = true,
  ...others
}: Props) => {
  const type = Array.isArray(list) ? 'pair' : 'single';

  const css = classNames({
    [`dl--type-${type}`]: type,
    'dl--border': withBorder,
    'dl--no-margin': noMargin,
  });

  return (
    <div className={`c-description-list ${modifier} ${className}`} {...others}>
      {!Array.isArray(list) && (
        <dl className={css}>
          <dt>{list.title}</dt>
          {list.value.map((value: string | number | boolean, index: number) => (
            <dd key={index}>{value}</dd>
          ))}
        </dl>
      )}

      <dl
        className={css}
        style={{ gridTemplateColumns: `repeat(${gridColumnCount}, 1fr)` }}
      >
        {Array.isArray(list)
          && list.map((pair: Pair, index: number) => (
            <Fragment key={index}>
              <dt>{pair.title}</dt>
              <dd>{pair.value}</dd>
            </Fragment>
          ))}
      </dl>
    </div>
  );
};

DescriptionList.displayName = 'DescriptionList';

export default memo<Props>(DescriptionList);
