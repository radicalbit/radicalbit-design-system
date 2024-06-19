import classNames from 'classnames';
import { ReactNode } from 'react';

export type Props = {
  left?: ReactNode;
  right?: ReactNode;
  chart?: ReactNode;
  modifier?: string;
  reverse?: boolean;
  headerType?: 'bold';
};

const MiniChart = ({
  left,
  right,
  chart,
  modifier = '',
  reverse = false,
  headerType,
}: Props) => {
  const css = classNames({
    'l-mini-chart--reverse': reverse,
  });

  const cssHeader = classNames({
    [`l-mini-chart__header--type-${headerType}`]: headerType,
  });

  return (
    <div className={`l-mini-chart ${modifier} ${css}`}>
      <div className={`l-mini-chart__header ${cssHeader}`}>
        <div className="l-mini-chart__left">{left}</div>
        <div className="l-mini-chart__right">{right}</div>
      </div>

      <div className="l-mini-chart__chart">{chart}</div>
    </div>
  );
};

MiniChart.displayName = 'MiniChart';

export default MiniChart;
