import { BreadcrumbProps } from 'antd';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta } from '@storybook/react';
import Breadcrumb from './index';
import BreadcrumbItem from './breadcrumbItem';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',

  component: Breadcrumb,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['separator']),
  },
};

export const Default = (props: BreadcrumbProps) => (
  <Breadcrumb {...props}>
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Data Ingestion</BreadcrumbItem>
    <BreadcrumbItem>Monitoring</BreadcrumbItem>
  </Breadcrumb>
);

export default meta;
