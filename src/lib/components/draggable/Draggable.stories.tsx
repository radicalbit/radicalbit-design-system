import { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';
import Draggable from '.';

const meta: Meta<typeof Draggable> = {
  title: 'Components/Draggable',
  component: Draggable,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

type Story = StoryObj<typeof Draggable>;

export const Default: Story = {
  args: {},
  render: (props) => {
    const ref = useRef(null);

    return (
      <div ref={ref} style={{ minHeight: 400, width: 400, border: '1px solid grey' }}>
        <Draggable {...props} containerRef={ref} containerClassName="draggable-container">
          <h3>Drag me !!!</h3>
          <h4>It is fun...</h4>
          <h5>🎊</h5>
        </Draggable>
      </div>
    );
  },
};

export default meta;
