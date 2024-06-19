export type CountdownProps = {
  date: number;
  label?: string;
  type?: 'inline' | 'labels';
  size?: 'large' | 'xlarge';
};

export type InnerProps = Omit<CountdownProps, 'size'>;

export type InlineCountdownProps = {
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
  label?: string;
};

export type LabelsCountdownProps = Omit<InlineCountdownProps, 'label'>;
