import { ReactNode, memo } from 'react';
import classNames from 'classnames';

type Props = {
  actions?: ReactNode | ReactNode[];
  actionsModifier?: string;
  description?: ReactNode;
  direction?: 'horizontal';
  glitched?: boolean;
  image?: ReactNode;
  mode?: 'light' | 'dark';
  modifier?: string /** Additional css classes */;
  size?: 'small' | 'xsmall';
  title?: ReactNode;
};

const Void = ({
  actions,
  actionsModifier = '',
  description,
  direction,
  glitched = false,
  image,
  mode,
  modifier = '',
  size,
  title,
  ...others
}: Props) => {
  const css = classNames({
    'c-void--glitched': glitched,
    [`c-void--${size}`]: size,
    [`c-void--direction-${direction}`]: direction,
  });

  const cssMode = classNames({
    [`${mode}`]: mode,
  });

  return (
    <div className={`c-void ${modifier} ${css} ${cssMode}`} {...others}>
      {image && <div className="c-void__img">{image}</div>}

      {(description || title) && (
        <div className="c-void__title">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      )}

      {actions && (
        <div className={`c-void__actions ${actionsModifier}`}>{actions}</div>
      )}
    </div>
  );
};

Void.displayName = 'Void';

export default memo<Props>(Void);
