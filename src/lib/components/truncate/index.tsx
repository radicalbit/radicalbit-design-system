import { ReactNode, memo } from 'react';

type Props = {
  children: ReactNode;
  suffix: ReactNode;
};

const Truncate = ({ children, suffix, ...other }: Props) => (
  <div className="c-truncate" {...other}>
    <div className="c-truncate__body">{children}</div>

    {suffix && <div className="c-truncate__suffix">{suffix}</div>}
  </div>
);

Truncate.displayName = 'Truncate';

export default memo<Props>(Truncate);
