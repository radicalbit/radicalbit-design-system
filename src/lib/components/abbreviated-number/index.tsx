import Tooltip from '../tooltip';

const ONE_THOUSAND = 1000;

const abbreviateNumber = (number: number, options?: Intl.NumberFormatOptions) => Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
  ...options,
}).format(number);

type Props = {
  value: number;
  options?: Intl.NumberFormatOptions;
};

function AbbreviatedNumber({ value, options }: Props) {
  if (value < ONE_THOUSAND) {
    return value;
  }

  return (
    <Tooltip title={value.toLocaleString()} placement="top">
      {abbreviateNumber(value, options)}
    </Tooltip>
  );
}

export default AbbreviatedNumber;
