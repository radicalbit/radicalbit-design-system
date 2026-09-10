import AntdRadio, { RadioProps } from 'antd/es/radio';
import Button from './button';
import Group from './group';

function Radio(props: RadioProps) {
  return <AntdRadio {...props} />;
}

Radio.displayName = 'Radio';
Radio.Button = Button;
Radio.Group = Group;

export default Radio;
