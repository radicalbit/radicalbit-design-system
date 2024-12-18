export type CountdownProps = {
  className?: string,
  date: number;
  label?: string;
  modifier?: string,
  size?: 'large' | 'xlarge';
  type?: 'inline' | 'labels';
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
