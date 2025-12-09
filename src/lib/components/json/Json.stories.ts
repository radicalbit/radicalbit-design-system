import { Meta, StoryObj } from '@storybook/react';
import JsonTree from './index';

const data = {
  id: 'proj_7f3c9d',
  title: 'Website Redesign',
  status: 'in_progress',
  priority: 'high',
  owner: {
    id: 'user_102',
    name: 'Elena Rossi',
    role: 'Product Designer',
  },
  meta: {
    createdAt: '2025-11-02T10:15:00Z',
    updatedAt: '2025-12-08T18:42:00Z',
    tags: ['ui', 'ux', 'a/b-test'],
    team: ['user_102', 'user_145', 'user_221'],
  },
  progress: {
    percentage: 62,
    trend: 'up',
    lastWeek: 48,
    milestones: [
      {
        id: 'ms_1',
        label: 'Research & Discovery',
        completed: true,
        completedAt: '2025-11-10T15:30:00Z',
      },
      {
        id: 'ms_2',
        label: 'Wireframes',
        completed: true,
        completedAt: '2025-11-18T11:05:00Z',
      },
      {
        id: 'ms_3',
        label: 'High-fidelity designs',
        completed: false,
        eta: '2025-12-20T00:00:00Z',
      },
    ],
  },
  metrics: {
    baselineConversion: 0.021,
    currentConversion: 0.027,
    targetConversion: 0.03,
    activeExperiments: 2,
    experiments: [
      {
        id: 'exp_nav_layout',
        name: 'Navigation Layout A/B',
        variantWinning: 'B',
        uplift: 0.0042,
      },
      {
        id: 'exp_cta_color',
        name: 'Primary CTA Color',
        variantWinning: null,
        uplift: 0.0,
      },
    ],
  },
  permissions: {
    canEdit: true,
    canArchive: false,
    canShare: true,
    visibility: 'team',
  },
};

const meta : Meta<typeof JsonTree> = {
  title: 'Components/JsonTree',

  component: JsonTree,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
};

const commonArgs = {};

type Story = StoryObj<typeof JsonTree>;

export const Default: Story = {
  args: {
    ...commonArgs,
    data,
  },
};

export default meta;
