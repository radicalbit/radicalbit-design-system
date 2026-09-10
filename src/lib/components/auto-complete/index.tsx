import LibAutocomplete, { AutoCompleteProps } from 'antd/es/auto-complete';

export interface Props extends AutoCompleteProps {
  modifier?: string;
}

function AutoComplete({
  className = '',
  modifier = '',
  ...other
}: Props) {
  return <LibAutocomplete
    className={`c-autocomplete ${modifier} ${className}`}
    {...other}
  />
}

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
