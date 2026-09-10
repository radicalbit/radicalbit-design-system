import {
  Button as AntRadioButton,
} from 'antd/es/radio';
import { RadioButtonProps } from 'antd/es/radio/radioButton';
  
function Button(props: RadioButtonProps) {
  return <AntRadioButton {...props} />;
}
  
Button.displayName = 'Button';

export default Button;
