import { ReactNode, memo } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  modifier?: string;
  suffix: ReactNode;
};

const Truncate = ({
  children,
  className = '',
  modifier = '',
  suffix,
  ...other
}: Props) => (
  <div className={`c-truncate ${modifier} ${className}`} {...other}>
    <div className="c-truncate__body">{children}</div>

    {suffix && <div className="c-truncate__suffix">{suffix}</div>}
  </div>
);

Truncate.displayName = 'Truncate';

export default memo<Props>(Truncate);
