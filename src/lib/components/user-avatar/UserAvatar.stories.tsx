import { Meta, StoryObj } from '@storybook/react';
import Button from '../button';
import Tag from '../tag';
import UserAvatar from '.';

const meta: Meta<typeof UserAvatar> = {
  title: 'Components/UserAvatar',
  component: UserAvatar,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof UserAvatar>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    actions: {
      one: (
        <Button size="small" type="primary">
          Logout
        </Button>
      ),
      two: (
        <Button size="small" type="link">
          Profile
        </Button>
      ),
    },
    userAvatarPath:
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    userClassification: 'Tenant',
    userName: 'Mario Rossi',
    popoverWidth: 400,
  },
};

export const WithBadge: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    badge: (
      <Tag rounded size="small" type="secondary" uppercase>
        Auditor
      </Tag>
    ),
    size: 'large',
    userAbbreviation: 'MR',
    userClassification: 'mario.rossi@radicalbit.ai',
    userName: 'Mario Rossi',
  },
};

export default meta;
