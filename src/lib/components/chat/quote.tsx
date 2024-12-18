import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  className?: string;
  message: ReactNode;
  modifier?: string;
  name: ReactNode;
  type?: 'primary';
};

const Quote = ({
  className = '',
  message,
  modifier = '',
  name,
  type,
}: Props) => {
  const css = classNames({
    [`m-quote--type-${type}`]: type,
  });

  return (
    <div className={`m-quote ${css} ${modifier} ${className}`}>
      <div className="m-quote__name">{name}</div>
      <div className="m-quote__message">{message}</div>
    </div>
  );
};
Quote.displayName = 'Quote';

export default Quote;
