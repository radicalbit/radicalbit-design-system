import AntdSlider, { SliderBaseProps } from 'antd/lib/slider';

type Props = SliderBaseProps & {
  modifier?: string;
  readOnly?: boolean;
};

function Slider({
  className = '',
  modifier = '',
  readOnly = false,
  ...props
}: Props) {
  return (
    <AntdSlider
      className={`c-slider ${modifier} ${readOnly && 'readonly'} ${className}`}
      {...props}
    />
  );
}

export default Slider;
