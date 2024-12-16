import { ReactNode, memo } from 'react';

type Props = {
  className?: string;
  footer?: ReactNode;
  header?: ReactNode;
  left?: ReactNode;
  main?: ReactNode;
  modifier?: string;
  right?: ReactNode;
};

const Inspector = ({
  className = '',
  footer,
  header,
  left,
  main,
  modifier = '',
  right,
}: Props) => (
  <div className={`l-inspector ${modifier} ${className}`}>
    {header && <div className="l-inspector__header">{header}</div>}

    <div className="l-inspector__body">
      {left && <div className="l-inspector__left">{left}</div>}
      {main && <div className="l-inspector__main">{main}</div>}
      {right && <div className="l-inspector__right">{right}</div>}
    </div>

    {footer && <div className="l-inspector__footer">{footer}</div>}
  </div>
);

Inspector.displayName = 'Inspector';

export default memo<Props>(Inspector);
