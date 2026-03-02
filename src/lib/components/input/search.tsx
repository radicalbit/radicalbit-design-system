import AntdInput, { InputRef } from 'antd/es/input';
import { SearchProps } from 'antd/es/input/Search';
import FontAwesomeIcon from '@Components/font-awesome-icon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { forwardRef, Ref } from 'react';

const { Search: AntdSearch } = AntdInput;

type Props = SearchProps & {
  modifier?: string;
}

const Search = forwardRef(({
  className = '',
  modifier = '',
  onSearch,
  allowClear,
  ...others
}: Props, ref: Ref<InputRef>) => {
  const css = classNames('c-search', {
    'c-search--no-search': !onSearch,
  }, modifier, className);

  return (
    <AntdSearch
      ref={ref}
      onSearch={onSearch}
      allowClear={allowClear === true ? { clearIcon: <FontAwesomeIcon icon={faSearch} /> } : allowClear}
      {...others}
      className={css}
    />
  );
});

Search.displayName = 'Search';

export default Search;
