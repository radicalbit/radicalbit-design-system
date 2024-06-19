import { faDiceD20, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Popconfirm } from 'antd';
import NewHeader from '../header/newHeader';
import Inspector from '.';

const Header = () => (
  <NewHeader
    title={(
      <>
        <FontAwesomeIcon icon={faDiceD20} />
        {' '}
        <h3> Kafka-Source-XD87 </h3>
      </>
    )}
    details={{
      one: (
        <Button
          type="primary"
          shape="circle"
          onClick={() => console.debug('Save')}
        >
          <FontAwesomeIcon icon={faSave} />
        </Button>
      ),
      two: (
        <Popconfirm
          title="Are you sure ?"
          onConfirm={() => console.debug('confirm')}
          onCancel={() => console.debug('cancel')}
          okText="Delete Node"
          cancelText="Cancel"
        />
      ),
    }}
  />
);

const meta: Meta<typeof Inspector> = {
  title: 'Components/Inspector',
  component: Inspector,

  tags: ['autodocs'],

  argTypes: {},
};
type Story = StoryObj<typeof Inspector>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },

  args: {
    header: <Header />,
    right: 'right',
    main: 'main',
    left: 'left',
    footer: 'footer',
  },
};

export default meta;
