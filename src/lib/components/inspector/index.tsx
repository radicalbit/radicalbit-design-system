import { ReactNode, memo } from 'react';

type Props = {
  header?: ReactNode;
  right?: ReactNode;
  main?: ReactNode;
  left?: ReactNode;
  footer?: ReactNode;
};

const Inspector = ({
  header, right, main, left, footer,
}: Props) => (
  <div className="l-inspector">
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
