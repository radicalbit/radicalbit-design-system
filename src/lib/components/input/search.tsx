import AntdInput, { InputRef } from 'antd/es/input';
import { SearchProps } from 'antd/es/input/Search';
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
  ...others
}: Props, ref: Ref<InputRef>) => {
  const css = classNames('c-search', {
    'c-search--no-search': !onSearch,
  }, modifier, className);

  return (
    <AntdSearch
      ref={ref}
      onSearch={onSearch}
      {...others}
      className={css}
    />
  );
});

Search.displayName = 'Search';

export default Search;
