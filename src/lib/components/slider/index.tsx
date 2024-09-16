import AntdSlider, { SliderBaseProps } from 'antd/lib/slider';

type Props = SliderBaseProps & {
  modifier?: string;
  readOnly?: boolean;
};

function Slider({
  modifier,
  readOnly = false,
  ...props
}: Props) {
  return <AntdSlider className={`c-slider ${modifier} ${readOnly && 'readonly'}`} {...props} />;
}

export default Slider;
