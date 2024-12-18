import classNames from 'classnames';
import { memo } from 'react';

type Props = {
  add?: React.ReactNode;
  align?: 'center' | 'flex-start' | 'flex-end';
  children: React.ReactNode;
  className?: string;
  modifier?: string;
  remove?: React.ReactNode;
};

const FormMultiple = ({
  add,
  align = 'center',
  children,
  className = '',
  modifier = '',
  remove,
}: Props) => {
  const css = classNames({
    [`c-form-multiple--align-${align}`]: align,
  });

  return (
    <div className={`c-form-multiple ${modifier} ${css} ${className}`}>
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
