import { Search as InputSearch } from '@Components/input';
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
  ...otherProps
}: Props) => (
  <InputSearch
    placeholder={placeholder || 'Search'}
    onSearch={onSearch}
    onChange={onChange}
    className={`rdb-search ${modifier} ${className}`}
    allowClear
    {...otherProps}
  />
);

Search.displayName = 'Search';

export default Search;
