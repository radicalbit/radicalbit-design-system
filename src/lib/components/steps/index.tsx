import AntdSteps, { StepsProps } from 'antd/es/steps';

type Props = StepsProps & {
  modifier?: string;
};

function Steps({
  className = '',
  current,
  direction,
  titlePlacement,
  modifier = '',
  status,
  ...others
}: Props) {
  const stepStatus: string[] = ['wait', 'process', 'finish', 'error'];

  if (status && !stepStatus.find((s: string): boolean => s === status)) {
    console.warn(
      `WARN: ${status} is an unknown status for Steps. Standard status are: ${stepStatus.join(
        ' ',
      )}`,
    );
  }

  return (
    <AntdSteps
      direction={direction || 'vertical'}
      current={current}
      titlePlacement={titlePlacement}
      status={status}
      className={`c-steps ${className} ${modifier}`}
      {...others}
    />
  );
}

Steps.displayName = 'Steps';
export default Steps;
