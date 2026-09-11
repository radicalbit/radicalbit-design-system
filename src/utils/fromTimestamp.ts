import dayjs from 'dayjs';

export function fromTimestamp(timestamp: number) {
  return dayjs(new Date(timestamp)).format('YYYY-MM-DD HH:mm').toString();
}
