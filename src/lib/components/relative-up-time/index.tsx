import moment from 'moment';
import Tooltip from '@Components/tooltip';
import { memo } from 'react';

type Props = {
  className?: string;
  from?: number;
  modifier?: string;
  timestamp?: string | number | Date;
  withTooltip?: boolean;
};

const RelativeUpTime = ({
  className = '',
  from,
  modifier = '',
  timestamp,
  withTooltip,
}: Props) => {
  if (!timestamp) {
    return <>--</>;
  }

  const fromDate = from !== undefined && from !== null ? moment(from) : moment();
  const diff = moment.duration(fromDate.diff(moment(timestamp)));

  const months = Math.round(diff.months());
  const weeks = Math.round(diff.weeks());
  const days = Math.round(diff.days());
  const hours = Math.round(diff.hours());
  const minutes = Math.round(diff.minutes());

  const monthsLabel = months ? `${months}M` : '';
  const weeksLabel = weeks ? `${weeks}w` : '';
  const daysLabel = days ? `${days}d` : '';
  const hoursLabel = hours ? `${hours}h` : '';
  const minutesLabel = minutes ? `${minutes}m` : '';
  
  const label = getLabel(monthsLabel, weeksLabel, daysLabel, hoursLabel, minutesLabel);
  const lableOrElse = label.trim().length === 0 ? '0m' : label;

  if (withTooltip) {
    const monthsTooltip = months > 1 ? `${months} months` : months === 1 ? `${months} month` : '';
    const weeksTooltip = weeks > 1 ? `${weeks} weeks` : weeks === 1 ? `${weeks} week` : '';
    const daysTooltip = days > 1 ? `${days} days` : days === 1 ? `${days} day` : '';
    const hoursTooltip = hours > 1 ? `${hours} hours` : hours === 1 ? `${hours} hour` : '';
    const minutesTooltip = minutes > 1
      ? `${minutes} minutes`
      : minutes === 1
        ? `${minutes} minute`
        : '';

    const title = `${monthsTooltip} ${weeksTooltip} ${daysTooltip} ${hoursTooltip} ${minutesTooltip}`;
    const titleOrElse = title.trim().length === 0 ? 'less than one minute' : title;

    return (
      <Tooltip mouseEnterDelay={0.5} title={titleOrElse}>
        {lableOrElse}
      </Tooltip>
    );
  }

  return (
    <div className={`m-relative-up-time ${modifier} ${className}`}>
      {lableOrElse}
    </div>
  );
};

const getLabel = (monthsLabel: string, weeksLabel: string, daysLabel: string, hoursLabel: string, minutesLabel: string): string => {
  if (monthsLabel) {
    return `${monthsLabel} ${weeksLabel} ${daysLabel} `;
  }

  if (weeksLabel) {
    return `${weeksLabel} ${daysLabel} ${hoursLabel}`;
  }

  return `${daysLabel} ${hoursLabel} ${minutesLabel}`;
};

RelativeUpTime.displayName = 'RelativeDateTime';

export default memo<Props>(RelativeUpTime);
