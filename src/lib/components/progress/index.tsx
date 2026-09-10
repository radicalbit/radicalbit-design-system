import AntdProgress, { ProgressProps } from 'antd/es/progress';

function Progress(props: ProgressProps) {
  return <AntdProgress {...props} />;
}

Progress.displayName = 'Progress';

export default Progress;
