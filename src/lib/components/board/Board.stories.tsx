import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import { Meta, StoryObj } from '@storybook/react';
import Board from '.';
import Button from '../button';
import DataTable from '../data-table/DataTable';

const meta: Meta<typeof Board> = {
  title: 'Components/Board',
  component: Board,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['footer', 'header', 'main', 'secondary']),

    onClick: {
      action: 'clicked',
    },

    backgroundImage: {
      control: 'select',
      options: ['testImage1', 'testImage2', null],
      mapping: {
        testImage1: 'https://picsum.photos/id/110/500/200?blur',
        testImage2: 'https://picsum.photos/id/119/500/200?blur',
      },

    },
  },
};

const commonArgs = {
  width: '500px',
  height: '200px',
  header: 'Board header',
  main: 'The main slot holds the content of the board.',
  footer: <Button size="small" type="primary">Confirm</Button>,
};

type Story = StoryObj<typeof Board>;

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export const WithSecondary: Story = {
  args: {
    ...commonArgs,
    secondary: 'Secondary slot',
  },
};

export const Types: Story = {
  args: commonArgs,
  render: (props) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {(['primary', 'primary-light', 'secondary', 'secondary-light', 'error', 'rounded'] as const).map((type) => (
        <Board {...props} key={type} type={type} header={type} width="240px" height="120px" />
      ))}
    </div>
  ),
};

export const Statuses: Story = {
  args: commonArgs,
  render: (props) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {(['default', 'active', 'unactive', 'disabled', 'in-evidence'] as const).map((status) => (
        <Board {...props} key={status} status={status} header={status} width="240px" height="120px" />
      ))}
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    ...commonArgs,
    header: 'Hover and click me',
    hoverType: 'primary',
  },
};

const noPaddingRows = [
  { key: '1', route: 'decide-plain', detail: 'Credential jevmisc-key · Duration 14 ms · Cost $0' },
  { key: '2', route: 'support-chat', detail: 'Credential support-web · Duration 182 ms · Cost <$0.0001' },
  { key: '3', route: 'faq-bot', detail: 'Credential faq-widget · Duration 14 ms · Cost $0' },
];

const noPaddingColumns = [
  {
    key: 'request',
    render: (_: unknown, row: typeof noPaddingRows[number]) => (
      <div
        style={{
          display: 'flex', flexDirection: 'column', gap: '.25rem', padding: '.75rem 1rem',
        }}
      >
        <strong>{row.route}</strong>
        <span>{row.detail}</span>
      </div>
    ),
  },
];

const noPaddingTable = (
  <DataTable
    clickable
    columns={noPaddingColumns}
    dataSource={noPaddingRows}
    noHead
    noPadding
    pagination={false}
    rowClassName={(row: typeof noPaddingRows[number]) => (row.key === '1' ? DataTable.ROW_PRIMARY_LIGHT : '')}
    size="small"
  />
);

export const SecondaryNoPadding: Story = {
  args: {
    width: '520px',
    header: 'Requests',
    main: 'Triggered on the request',
    secondaryProps: { noPadding: true },
    secondary: noPaddingTable,
  },
};

export const AllSlotsNoPadding: Story = {
  args: {
    width: '520px',
    headerProps: { noPadding: true },
    header: (
      <div
        style={{
          display: 'flex', justifyContent: 'space-between', padding: '.875rem 1rem', borderBottom: '1px solid var(--coo-border-primary)',
        }}
      >
        <strong>Requests</strong>
        <span>3 requests</span>
      </div>
    ),
    mainProps: { noPadding: true },
    main: (
      <div style={{ padding: '.625rem 1rem', background: 'var(--coo-bk-lv0)', borderBottom: '1px solid var(--coo-border-primary)' }}>
        Triggered on the request
      </div>
    ),
    secondaryProps: { noPadding: true },
    secondary: noPaddingTable,
  },
};

export default meta;
