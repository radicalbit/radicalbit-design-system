import {
  Button as AntRadioButton,
} from 'antd/lib/radio';
import { RadioButtonProps } from 'antd/lib/radio/radioButton';
  
const Button = (props: RadioButtonProps) => <AntRadioButton {...props} />;
  
Button.displayName = 'Button';

export default Button;
