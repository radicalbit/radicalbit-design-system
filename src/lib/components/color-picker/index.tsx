import {
  ChromePicker, BlockPicker, ColorChangeHandler, RGBColor,
} from 'react-color';
import { useState } from 'react';
import classNames from 'classnames';
import Badge from 'antd/lib/badge';

export type Props = {
  color?: string;
  onChangeHex?: (color?: string) => void;
  onChangeRgba?: (color?: RGBColor) => void;
  placement?: 'top' | 'right' | 'left';
  type?: 'chrome' | 'block';
  modifier?: string;
};

const ColorPicker = ({
  color = '',
  onChangeHex,
  onChangeRgba,
  placement,
  type = 'chrome',
  modifier = '',
  ...others
}: Props) => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const css = classNames({
    [`c-color-picker--placement-${placement}`]: placement,
  });

  const handleClick = () => {
    setIsPickerVisible((prevValue: boolean) => !prevValue);
  };

  const handleClose = () => {
    setIsPickerVisible(false);
  };

  const handleChange: ColorChangeHandler = ({ hex, rgb }) => {
    if (onChangeHex) onChangeHex(hex);

    if (onChangeRgba) onChangeRgba(rgb);
  };

  return (
    <div className={`c-color-picker ${css} ${modifier}`}>
      <div
        role="presentation"
        className="c-color-picker__swatch ant-input"
        onClick={handleClick}
      >
        {color.toUpperCase()}

        <Badge className="c-color-picker__swatch-badge" color={color} />
      </div>

      {isPickerVisible && (
        <div className="c-color-picker__picker">
          <div
            role="presentation"
            className="c-color-picker__picker-cover"
            onClick={handleClose}
          />

          {type === 'chrome' && (
            <ChromePicker
              disableAlpha
              color={color}
              onChange={handleChange}
              {...others}
            />
          )}

          {type === 'block' && (
            <BlockPicker
              colors={[]}
              triangle="hide"
              color={color}
              onChange={handleChange}
              {...others}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
