import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '../button';
import Tour from '.';

const mockSteps = [
  {
    selector: '.tour-demo-div',
    size: 'small',
    content: 'This is my Div',
  },
  {
    selector: '.tour-demo-button',
    content: 'This is my Button!',
  },
];

const meta: Meta<typeof Tour> = {
  title: 'Components/Tour',
  component: Tour,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof Tour>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    steps: mockSteps,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ width: 400 }}>

        <div style={{ display: 'flex', gap: 100, alignItems: 'center' }}>
          <Button className="tour-demo-button">I am a Button</Button>
          <div
            className="tour-demo-div"
            style={{ padding: 10, border: '1px solid grey' }}
          >
            I am a div
          </div>
        </div>
        <br />
        <Button onClick={() => setOpen(true)} type="text">Start Tour</Button>
      
        <Tour
          steps={mockSteps}
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        />
      </div>
    );
  },
};

export default meta;
