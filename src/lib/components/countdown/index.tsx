import React from 'react';
import classnames from 'classnames';
import {
  CountdownProps,
  InnerProps,
  InlineCountdownProps,
  LabelsCountdownProps,
} from './types';

function Countdown({
  className = '',
  date,
  label,
  modifier = '',
  size,
  type = 'inline',
}: CountdownProps) {
  const expired = date - Date.now() <= 0;

  const css = classnames({
    [`m-countdown--${size}`]: size,
  });

  if (expired) {
    return (
      <div className={`m-countdown ${css} ${modifier} ${className}`}>
        <div className="m-countdown__element">
          <div className="m-countdown__element-value">Expired</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`m-countdown ${css} ${modifier} ${className}`}>
      <Inner date={date} label={label} type={type} />
    </div>
  );
}

function Inner({ type, date, label }: InnerProps) {
  const {
    days, hours, minutes, seconds,
  } = calculateCountdown(date);

  switch (type) {
    case 'inline':
      return (
        <InlineCountdown
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          label={label}
        />
      );
    case 'labels':
      return (
        <LabelsCountdown
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    default:
      return null;
  }
}

function InlineCountdown({
  days,
  hours,
  minutes,
  seconds,
  label,
}: InlineCountdownProps) {
  return (
    <div className="m-countdown__element">
      <span className="m-countdown__element-label">{label}</span>

      <span className="m-countdown__element-value">
        {days}
        <small>d</small>
        {' '}
        {hours}
        <small>h</small>
        {' '}
        {minutes}
        <small>m</small>
        {' '}
        {seconds}
        <small>s</small>
      </span>
    </div>
  );
}

function LabelsCountdown({
  days,
  hours,
  minutes,
  seconds,
}: LabelsCountdownProps) {
  return (
    <>
      <div className="m-countdown__element">
        <span className="m-countdown__element-value">{days}</span>

        <span className="m-countdown__element-label">days</span>
      </div>

      <div className="m-countdown__divider">:</div>

      <div className="m-countdown__element">
        <span className="m-countdown__element-value">{hours}</span>

        <span className="m-countdown__element-label">hours</span>
      </div>

      <div className="m-countdown__divider">:</div>

      <div className="m-countdown__element">
        <span className="m-countdown__element-value">{minutes}</span>

        <span className="m-countdown__element-label">minutes</span>
      </div>

      <div className="m-countdown__divider">:</div>

      <div className="m-countdown__element">
        <span className="m-countdown__element-value">{seconds}</span>

        <span className="m-countdown__element-label">seconds</span>
      </div>
    </>
  );
}

const calculateCountdown = (deadline: number) => {
  const t = deadline - Date.now();

  const days = Math.floor(t / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, '0');
  const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor((t % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, '0');

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

Countdown.displayName = 'Countdown';

export default React.memo(Countdown);
