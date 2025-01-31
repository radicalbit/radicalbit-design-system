import AntdSteps, { StepsProps } from 'antd/es/steps';

const { Step } = AntdSteps;
type Props = StepsProps & {
  modifier?: string;
};

const Steps = ({
  children,
  className = '',
  current,
  direction,
  labelPlacement,
  modifier = '',
  status,
  ...others
}: Props) => {
  const stepStatus: Array<string> = ['wait', 'process', 'finish', 'error'];

  if (status && !stepStatus.find((s: string): boolean => s === status)) {
    console.warn(
      `WARN: ${status} is an unknown status for Steps. Standard status are: ${stepStatus.join(
        ' '
      )}`
    );
  }

  return (
    <AntdSteps
      direction={direction || 'vertical'}
      current={current}
      labelPlacement={labelPlacement}
      status={status}
      className={`c-steps ${className} ${modifier}`}
      {...others}
    >
      {children}
    </AntdSteps>
  );
};

Steps.Step = Step;

Steps.displayName = 'Steps';
export default Steps;
