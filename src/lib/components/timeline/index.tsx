import AntdTimeline, { TimelineItemProps, TimelineProps } from 'antd/es/timeline';
import classNames from 'classnames';

export type TimelineTone = 'primary' | 'success' | 'warning' | 'error' | 'muted' | 'neutral';

export type TimelineItem = Omit<TimelineItemProps, 'color' | 'label' | 'children' | 'dot' | 'position'> & {
  tone?: TimelineTone;
};

export type Props = Omit<TimelineProps, 'items' | 'pending' | 'pendingDot'> & {
  items: TimelineItem[];
  modifier?: string;
};

function Timeline({
  className,
  items,
  modifier = '',
  ...others
}: Props) {
  const toneItems = items.map(({ tone = 'primary', className: itemClassName, ...item }) => ({
    ...item,
    className: classNames(`c-timeline__item--tone-${tone}`, itemClassName),
  }));

  return (
    <AntdTimeline
      className={classNames('c-timeline', className, modifier)}
      items={toneItems}
      {...others}
    />
  );
}

Timeline.displayName = 'Timeline';
export default Timeline;
