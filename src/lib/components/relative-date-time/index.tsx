import moment from 'moment';
import Tooltip from '@Components/tooltip';
import { memo } from 'react';

type Granularity = 'seconds' | 'days';

type Props = {
  className?: string;
  format?: string;
  formatTooltip?: string;
  minGranularity?: Granularity;
  modifier?: string;
  mouseEnterDelay?: number;
  threshold?: number;
  timestamp: string | number | Date;
  withTooltip?: boolean;
};

const dateFormatter = (dateFormat: string, timestamp: string | number | Date) => moment(new Date(timestamp)).format(dateFormat).toString();

const getRelativeDate = (timestamp: string | number | Date, minGranularity: Granularity) => {
  switch (minGranularity) {
    case 'seconds':
      return moment(timestamp).fromNow();

    case 'days':
      if (moment().diff(timestamp, 'hours') < 22) {
        const date = moment(timestamp);
        const endOfYesterday = moment().add(-1, 'day').endOf('day');
        const endOfToday = moment().endOf('day');
        const endOfTomorrow = moment().add(1, 'day').endOf('day');

        if (date < endOfYesterday) {
          return 'Yesterday';
        }
        if (date < endOfToday) {
          return 'Today';
        }
        if (date < endOfTomorrow) {
          return 'Tomorrow';
        }
      }

      return moment(timestamp).fromNow();

    default:
      return moment(timestamp).fromNow();
  }
};

const RelativeDateTime = ({
  className = '',
  format = 'DD MMM YYYY',
  formatTooltip = 'DD MMM YYYY HH:mm',
  minGranularity = 'seconds',
  modifier = '',
  mouseEnterDelay,
  threshold = 3,
  timestamp,
  withTooltip,
}: Props) => {
  const difference = moment().diff(timestamp, 'days');
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
};

RelativeDateTime.displayName = 'RelativeDateTime';

export default memo<Props>(RelativeDateTime);
