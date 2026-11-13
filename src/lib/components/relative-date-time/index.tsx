import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Tooltip from '@Components/tooltip';
import { memo, useEffect, useState } from 'react';

dayjs.extend(relativeTime);

type Granularity = 'seconds' | 'days';

export interface Duration {
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
}

const MILLISECONDS = {
  weeks: 7 * 24 * 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000,
  hours: 60 * 60 * 1000,
  minutes: 60 * 1000,
};

interface Props {
  className?: string;
  format?: string;
  formatTooltip?: string;
  minGranularity?: Granularity;
  modifier?: string;
  mouseEnterDelay?: number;
  refreshInterval?: number;
  threshold?: number | Duration;
  timestamp: string | number | Date;
  withTooltip?: boolean;
}

const useRefresh = (refreshInterval?: number) => {
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!refreshInterval) {
      return undefined;
    }

    const interval = setInterval(() => setTick((tick) => tick + 1), refreshInterval * 1000);

    return () => clearInterval(interval);
  }, [refreshInterval]);
};

const durationInMilliseconds = ({
  weeks = 0, days = 0, hours = 0, minutes = 0,
}: Duration) => (
  weeks * MILLISECONDS.weeks
  + days * MILLISECONDS.days
  + hours * MILLISECONDS.hours
  + minutes * MILLISECONDS.minutes
);

const isWithinThreshold = (timestamp: string | number | Date, threshold: number | Duration) => {
  if (typeof threshold === 'number') {
    return dayjs().diff(timestamp, 'day') <= threshold;
  }

  return dayjs().diff(timestamp) <= durationInMilliseconds(threshold);
};

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
  refreshInterval,
  threshold = 3,
  timestamp,
  withTooltip,
}: Props) {
  useRefresh(refreshInterval);

  const tooltipDate = dateFormatter(formatTooltip, timestamp);

  const dateToShow = isWithinThreshold(timestamp, threshold)
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
