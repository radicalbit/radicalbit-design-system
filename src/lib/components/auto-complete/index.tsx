import LibAutocomplete, { AutoCompleteProps } from 'antd/es/auto-complete';

export interface Props extends AutoCompleteProps {
  modifier?: string;
}

const AutoComplete = ({
  className = '',
  modifier = '',
  ...other
}: Props) => (
  <LibAutocomplete
    className={`c-autocomplete ${modifier} ${className}`}
    {...other}
  />
);

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
