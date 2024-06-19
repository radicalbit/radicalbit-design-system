import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import Thumbnail from '.';

const meta: Meta<typeof Thumbnail> = {
  title: 'Components/Thumbnail',
  component: Thumbnail,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    highlighted: true,
    withPreview: true,
    children: <FontAwesomeIcon icon={faHeart} />,
  },
};

export default meta;
