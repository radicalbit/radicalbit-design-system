import AntdProgress, { ProgressProps } from 'antd/lib/progress';

const Progress = (props: ProgressProps) => <AntdProgress {...props} />;

Progress.displayName = 'Progress';

export default Progress;
