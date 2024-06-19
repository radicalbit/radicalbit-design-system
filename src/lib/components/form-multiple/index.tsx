import classNames from 'classnames';
import { memo } from 'react';

type Props = {
  children: React.ReactNode;
  modifier?: string;
  add?: React.ReactNode;
  remove?: React.ReactNode;
  align?: 'center' | 'flex-start' | 'flex-end';
};

const FormMultiple = ({
  add,
  children,
  modifier = '',
  remove,
  align = 'center',
}: Props) => {
  const css = classNames({
    [`c-form-multiple--align-${align}`]: align,
  });

  return (
    <div className={`c-form-multiple ${modifier} ${css}`}>
      <div className="c-form-multiple__content">{children}</div>

      <div className="c-form-multiple__actions">
        {add && <div className="c-form-multiple__add">{add}</div>}

        {remove && <div className="c-form-multiple__remove">{remove}</div>}
      </div>
    </div>
  );
};

FormMultiple.displayName = 'FormMultiple';

export default memo(FormMultiple);
