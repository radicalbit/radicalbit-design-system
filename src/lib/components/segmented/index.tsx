import AntdSegmented, { SegmentedProps } from 'antd/es/segmented';
import classNames from 'classnames';

type Props = SegmentedProps & {
  modifier?: string;
  type?: 'highlighted';
};

const Segmented = (props: Props) => {
  const {
    className = '',
    modifier = '',
    type,
    ...others
  } = props;

  const css = classNames('c-segmented', modifier, className, {
    [`c-segmented--${type}`]: type,
  });

  return <AntdSegmented className={css} {...others} />;
};

Segmented.displayName = 'Segmented';

export default Segmented;
