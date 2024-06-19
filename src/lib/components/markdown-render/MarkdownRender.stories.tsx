import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import MarkdownRender from './index';

const mockData = `
### Operator description.
Filters events according to specified rules.

### Properties description.
- query - 

### Example

Bellow there is an example of a query which leaves only records that have fields values: user_friends_count > 10 AND (lang = 'En' OR user_location = 'London')

Sample operator properties
- Filter:
    + Group operator: AND
    + Sub group 1: 
        - Group operator: OR
        - Rule 1: lang = 'En' 
        - Rule 2: user_location = 'London'
    - Sub group 2: 
        - Group operator: AND
        - Rule 1: user_friends_count > 10


Example of the input with a result:

| user_id(Long) | lang(String) | user_location(String) | user_verified(Boolean) | user_friends_count(Int) | text(String)       | result        |
|---------------|--------------|-----------------------|------------------------|-------------------------|--------------------|---------------|
| 1             | EN           | Milan                 | true                   | 44                      | Nice weather today | remains       |
| 2             |              | Rome                  | true                   | 0                       | TGIF               | removed       |
| 3             |              | London                | false                  | 2                       | Happy new year!    | removed       |
`;

const meta: Meta<typeof MarkdownRender> = {
  title: 'Components/MarkdownRender',

  component: MarkdownRender,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['content', 'labels']),
  },
};

const commonArgs = {
  value: mockData,
};

type Story = StoryObj<typeof MarkdownRender>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  render: (props) => <MarkdownRender {...props} />,
};

export default meta;
