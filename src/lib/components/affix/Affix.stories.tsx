import { Meta, StoryObj } from '@storybook/react';
import { AffixProps } from 'antd';
import { useRef } from 'react';
import Affix from './index';
import Button from '../button';

const meta: Meta<typeof Affix> = {
  title: 'Components/Affix',

  component: Affix,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

};

type Story = StoryObj<typeof Affix>;

export const Default : Story = {
    
  render: (props: AffixProps) => {
    const ref = useRef(null);
    return (
      <div style={{ height: '200px', overflowY: 'scroll' }} ref={ref}>
        <div style={{ height: '600px' }}>
          <Affix {...props} target={() => ref.current}>
            <Button>Affix</Button>
          </Affix>
        </div>
      </div>
    );
  },
};

export default meta;
