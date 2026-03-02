import { Search as InputSearch } from '@Components/input';
import FontAwesomeIcon from '@Components/font-awesome-icon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchProps } from 'antd/es/input/Search';
import { ChangeEventHandler } from 'react';

type Props = SearchProps & {
  modifier?: string,
  placeholder?: string,
  onSearch?: (s: string) => void,
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Search = ({
  className = '',
  modifier = '',
  placeholder,
  onSearch,
  onChange,
  allowClear,
  ...otherProps
}: Props) => (
  <InputSearch
    placeholder={placeholder || 'Search'}
    onSearch={onSearch}
    onChange={onChange}
    className={`rdb-search ${modifier} ${className}`}
    allowClear={allowClear === true ? { clearIcon: <FontAwesomeIcon icon={faSearch} /> } : allowClear}
    {...otherProps}
  />
);

Search.displayName = 'Search';

export default Search;
