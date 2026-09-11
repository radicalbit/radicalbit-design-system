import { BreadcrumbProps } from 'antd';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta } from '@storybook/react';
import Breadcrumb from ".";
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

export function Default(props: BreadcrumbProps) {
  return <Breadcrumb {...props}>
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Data Ingestion</BreadcrumbItem>
    <BreadcrumbItem>Monitoring</BreadcrumbItem>
  </Breadcrumb>
}

export default meta;
