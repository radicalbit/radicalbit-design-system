import AntdAutocomplete, { AutoCompleteProps } from 'antd/lib/auto-complete';

export interface Props extends AutoCompleteProps {
    className?: string,
    modifier?: string;
}
  
const AutoComplete = ({
  className = '',
  modifier = '',
  ...other
}: Props) => (
  <AntdAutocomplete
    className={`c-autocomplete ${modifier} ${className}`}
    {...other}
  />
);

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
