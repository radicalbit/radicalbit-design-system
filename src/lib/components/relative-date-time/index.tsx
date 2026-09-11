import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Tooltip from '@Components/tooltip';
import { memo } from 'react';

dayjs.extend(relativeTime);

type Granularity = 'seconds' | 'days';

interface Props {
  className?: string;
  format?: string;
  formatTooltip?: string;
  minGranularity?: Granularity;
  modifier?: string;
  mouseEnterDelay?: number;
  threshold?: number;
  timestamp: string | number | Date;
  withTooltip?: boolean;
}

const dateFormatter = (dateFormat: string, timestamp: string | number | Date) => dayjs(new Date(timestamp)).format(dateFormat).toString();

const getRelativeDate = (timestamp: string | number | Date, minGranularity: Granularity) => {
  switch (minGranularity) {
    case 'seconds':
      return dayjs(timestamp).fromNow();

    case 'days':
      if (dayjs().diff(timestamp, 'hour') < 22) {
        const date = dayjs(timestamp);
        const endOfYesterday = dayjs().add(-1, 'day').endOf('day');
        const endOfToday = dayjs().endOf('day');
        const endOfTomorrow = dayjs().add(1, 'day').endOf('day');

        if (date.isBefore(endOfYesterday)) {
          return 'Yesterday';
        }
        if (date.isBefore(endOfToday)) {
          return 'Today';
        }
        if (date.isBefore(endOfTomorrow)) {
          return 'Tomorrow';
        }
      }

      return dayjs(timestamp).fromNow();

    default:
      return dayjs(timestamp).fromNow();
  }
};

function RelativeDateTime({
  className = '',
  format = 'DD MMM YYYY',
  formatTooltip = 'DD MMM YYYY HH:mm',
  minGranularity = 'seconds',
  modifier = '',
  mouseEnterDelay,
  threshold = 3,
  timestamp,
  withTooltip,
}: Props) {
  const difference = dayjs().diff(timestamp, 'day');
  const tooltipDate = dateFormatter(formatTooltip, timestamp);

  const dateToShow = difference <= threshold
    ? getRelativeDate(timestamp, minGranularity)
    : dateFormatter(format, timestamp);

  return withTooltip ? (
    <Tooltip title={tooltipDate} mouseEnterDelay={mouseEnterDelay}>
      <span className={`m-relative-date-time ${modifier} ${className}`}>
        {dateToShow}
      </span>
    </Tooltip>
  ) : (
    <span className={`m-relative-date-time ${modifier} ${className}`}>
      {dateToShow}
    </span>
  );
}

RelativeDateTime.displayName = 'RelativeDateTime';

export default memo<Props>(RelativeDateTime);
