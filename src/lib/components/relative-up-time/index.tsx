import dayjs from 'dayjs';
import Tooltip from '@Components/tooltip';
import { memo } from 'react';

interface Props {
  className?: string;
  from?: number;
  modifier?: string;
  timestamp?: string | number | Date;
  withTooltip?: boolean;
}

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

// Splits an elapsed time into successive remainders, so each unit counts only
// what the larger ones left over. The previous moment-based version read
// duration getters that overlap (weeks and days both covered the same days,
// printing "3w 21d" for 21 days) and wrapped months at 12 without reading
// years, so anything past a year came out as a handful of months.
const splitDuration = (elapsed: number) => {
  const totalDays = Math.floor(elapsed / DAY);
  const years = Math.floor(totalDays / 365);
  const daysAfterYears = totalDays - years * 365;
  const months = Math.floor(daysAfterYears / 30);
  const daysAfterMonths = daysAfterYears - months * 30;
  const weeks = Math.floor(daysAfterMonths / 7);
  const days = daysAfterMonths - weeks * 7;
  const withinDay = elapsed - totalDays * DAY;

  return {
    years,
    months,
    weeks,
    days,
    hours: Math.floor(withinDay / HOUR),
    minutes: Math.floor((withinDay % HOUR) / MINUTE),
  };
};

const UNITS = [
  { key: 'years', short: 'y', long: 'year' },
  { key: 'months', short: 'M', long: 'month' },
  { key: 'weeks', short: 'w', long: 'week' },
  { key: 'days', short: 'd', long: 'day' },
  { key: 'hours', short: 'h', long: 'hour' },
  { key: 'minutes', short: 'm', long: 'minute' },
] as const;

function RelativeUpTime({
  className = '',
  from,
  modifier = '',
  timestamp,
  withTooltip,
}: Props) {
  if (!timestamp) {
    return <>--</>;
  }

  const fromDate = from !== undefined && from !== null ? dayjs(from) : dayjs();
  const parts = splitDuration(Math.max(0, fromDate.diff(dayjs(timestamp))));

  // Only the three largest non-zero units carry useful information.
  const shown = UNITS.filter(({ key }) => parts[key] > 0).slice(0, 3);

  const label = shown.map(({ key, short }) => `${parts[key]}${short}`).join(' ');
  const labelOrElse = label.length === 0 ? '0m' : label;

  if (withTooltip) {
    const title = shown
      .map(({ key, long }) => `${parts[key]} ${long}${parts[key] > 1 ? 's' : ''}`)
      .join(' ');
    const titleOrElse = title.length === 0 ? 'less than one minute' : title;

    return (
      <Tooltip mouseEnterDelay={0.5} title={titleOrElse}>
        <div className={`m-relative-up-time ${modifier} ${className}`}>
          {labelOrElse}
        </div>
      </Tooltip>
    );
  }

  return (
    <div className={`m-relative-up-time ${modifier} ${className}`}>
      {labelOrElse}
    </div>
  );
}

RelativeUpTime.displayName = 'RelativeUpTime';

export default memo<Props>(RelativeUpTime);
