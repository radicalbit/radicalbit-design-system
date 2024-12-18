import classNames from 'classnames';
import { memo } from 'react';

export type Props = {
  actions?: string;
  bottomLeft?: React.ReactNode;
  bottomRight?: React.ReactNode;
  className?: string;
  content?: React.ReactNode;
  label?: React.ReactNode;
  modifier?: string;
  style?: React.CSSProperties;
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
  type?: 'error' | 'highlight-default' | 'highlight-error' | 'spotlighted';
};

const Node = ({
  bottomLeft,
  bottomRight,
  className = '',
  content,
  label,
  modifier = '',
  style,
  topLeft,
  topRight,
  type,
}: Props) => {
  const css = classNames({
    [`m-node--type-${type}`]: type,
  });

  return (
    <div className={`m-node ${modifier} ${css} ${className}`} style={style}>
      {topRight && (
        <div className="m-node__actions m-node__actions--topRight">
          {topRight}
        </div>
      )}

      {topLeft && (
        <div className="m-node__actions m-node__actions--topLeft">
          {topLeft}
        </div>
      )}

      {content && <div className="m-node__content">{content}</div>}

      {bottomRight && (
        <div className="m-node__actions m-node__actions--bottomRight">
          {bottomRight}
        </div>
      )}

      {bottomLeft && (
        <div className="m-node__actions m-node__actions--bottomLeft">
          {bottomLeft}
        </div>
      )}

      {label && <div className="m-node__label">{label}</div>}
    </div>
  );
};

Node.displayName = 'Node';

export default memo<Props>(Node);
