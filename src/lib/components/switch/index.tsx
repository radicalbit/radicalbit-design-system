import AntdSwitch, { SwitchProps } from 'antd/es/switch';

type Props = SwitchProps;

const Switch = (props: Props) => <AntdSwitch className="c-switch" {...props} />;

Switch.displayName = 'Switch';

export default Switch;
