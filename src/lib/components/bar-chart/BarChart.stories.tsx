import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta } from '@storybook/react';
import BarChart, { Props } from './index';

const meta: Meta<typeof BarChart> = {
  title: 'Components/BarChart',

  component: BarChart,

  parameters: {
    layout: 'centered',
    
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['content', 'labels']),
  },
};

export const Default = ({
  value = 75,
  content = 75,
  labels = ['min', 'max'], ...args
}: Props) => (
  <div style={{ width: '500px' }}>
    <BarChart value={value} content={content} labels={labels} {...args} />
  </div>
);

export default meta;
