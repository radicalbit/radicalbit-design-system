import { useState } from 'react';
import { Meta } from '@storybook/react';
import Pagination, { Props } from ".";

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  
  tags: ['autodocs'],

};

export function Default(props: Props) {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      {...props}
      current={page}
      total={100}
      onChange={(page) => {
        setPage(page);
      }}

    />
  );
}

export default meta;
