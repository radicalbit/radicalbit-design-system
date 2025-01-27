import {
  Button as AntRadioButton,
} from 'antd/es/radio';
import { RadioButtonProps } from 'antd/es/radio/radioButton';
  
const Button = (props: RadioButtonProps) => <AntRadioButton {...props} />;
  
Button.displayName = 'Button';

export default Button;
