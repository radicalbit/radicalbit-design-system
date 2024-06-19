import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  modifier?: string;
  name: ReactNode;
  message: ReactNode;
  type?: 'primary';
};

const Quote = ({
  modifier = '', name, message, type,
}: Props) => {
  const css = classNames({
    [`m-quote--type-${type}`]: type,
  });

  return (
    <div className={`m-quote ${css} ${modifier}`}>
      <div className="m-quote__name">{name}</div>
      <div className="m-quote__message">{message}</div>
    </div>
  );
};
Quote.displayName = 'Quote';

export default Quote;
