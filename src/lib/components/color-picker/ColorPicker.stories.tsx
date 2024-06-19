import { mapSelectArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ColorPicker, { Props } from './index';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',

  component: ColorPicker,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapSelectArgsTypes([
      { title: 'type', options: ['chrome', 'block'] },
      { title: 'placement', options: ['top', 'right', 'bottom', 'left'] },
    ]),
  },
};

const commonArgs: Props = {
  placement: 'top',
  type: 'chrome',
  modifier: '',
};

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  render: (props) => {
    const [color, setColor] = useState('#FFF');

    const onChangeHex = (color?: string) => {
      if (color) {
        setColor(color);
      }
      
      return color;
    };
    return (
      <div style={{ height: 200, width: '100%' }}>
        <ColorPicker
          {...props}
          color={color}
          onChangeHex={onChangeHex}
        />
      </div>
    );
  },
};

export default meta;
