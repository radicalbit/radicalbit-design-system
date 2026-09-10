import AntdSwitch, { SwitchProps } from 'antd/es/switch';

type Props = SwitchProps;

function Switch(props: Props) {
  return <AntdSwitch className="c-switch" {...props} />;
}

Switch.displayName = 'Switch';

export default Switch;
