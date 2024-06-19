import { Search as InputSearch } from '@Components/input';
import { SearchProps } from 'antd/lib/input/Search';
import { ChangeEventHandler } from 'react';

type Props = SearchProps & {
  placeholder?: string,
  onSearch?: (s: string) => void,
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Search = (props: Props) => {
  const {
    placeholder, onSearch, onChange, ...otherProps
  } = props;

  return (
    <InputSearch
      placeholder={placeholder || 'Search'}
      onSearch={onSearch}
      onChange={onChange}
      className="rdb-search"
      allowClear
      {...otherProps}
    />
  );
};

Search.displayName = 'Search';

export default Search;
