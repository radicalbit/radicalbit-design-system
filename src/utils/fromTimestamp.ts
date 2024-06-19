import moment from 'moment';

export function fromTimestamp(timestamp: number) {
  return moment(new Date(timestamp)).format('YYYY-MM-DD HH:mm').toString();
}
