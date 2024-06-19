import classNames from 'classnames';
import { ReactNode } from 'react';

export type Props = {
  animated?: boolean;
  content?: ReactNode;
  labels?: ReactNode[];
  large?: boolean;
  modifier?: string;
  padding?: boolean;
  prefix?: ReactNode[];
  reverse?: boolean;
  type?: 'red' | 'error' | 'warning' | 'secondary' | 'primary' | 'dark';
  value: number;
  width?: number;
  /** @deprecated Deprecated */
  contentType?: 'fixed' | 'none';
  /** @deprecated Deprecated */
  contentFixed?: boolean;
};

const BarChart = ({
  animated = false,
  content,
  contentFixed = false,
  contentType,
  labels,
  large = false,
  modifier = '',
  padding = false,
  prefix,
  reverse = false,
  type,
  value,
  width,
}: Props) => {
  const css = classNames({
    'c-bar-chart--padding': padding,
    'c-bar-chart--reverse': reverse,
    'c-bar-chart--animated': animated,
  });

  const cssBar = classNames({
    [`c-bar-chart__bar--type-${type}`]: type,
    'c-bar-chart__bar--large': large,
  });

  const cssContent = classNames({
    'c-bar-chart__content--fixed': contentFixed,
    [`c-bar-chart__content--${contentType}`]: contentType,
  });

  return (
    <div className={`c-bar-chart ${css}`} style={{ width }}>
      {prefix && (
        <div className="c-bar-chart__labels">
          {prefix.map((label: string | ReactNode, index: number) => (
            <div key={index} className="c-bar-chart__label">
              {label}
            </div>
          ))}
        </div>
      )}

      <div className={`c-bar-chart__bar ${modifier} ${cssBar}`}>
        <div className="c-bar-chart__value" style={{ width: `${value}%` }}>
          {content && (
            <div className={`c-bar-chart__content ${cssContent}`}>
              {content}
            </div>
          )}
        </div>
      </div>

      {labels && (
        <div className="c-bar-chart__labels">
          {labels.map((label: string | ReactNode, index: number) => (
            <div key={index} className="c-bar-chart__label">
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

BarChart.displayName = 'BarChart';

export default BarChart;
