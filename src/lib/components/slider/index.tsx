import AntdSlider, { SliderBaseProps } from 'antd/lib/slider';

type Props = SliderBaseProps & {
  modifier?: string;
};

function Slider({ modifier, ...props }: Props) {
  return <AntdSlider className={`c-slider ${modifier}`} {...props} />;
}

export default Slider;
