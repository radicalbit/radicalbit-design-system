import classNames from 'classnames';
import { ReactNode, memo } from 'react';

export type Actions = {
  one?: ReactNode;
  two?: ReactNode;
};

export type Details = {
  one?: ReactNode;
  two?: ReactNode;
  three?: ReactNode;
  four?: ReactNode;
  five?: ReactNode;
};

type Props = {
  actions?: Actions;
  actionsPosition?: 'start' | 'end';
  alignment?: 'left-centered' | 'default-centered' | 'flex-start';
  className?: string;
  details?: Details;
  mode?: 'light' | 'dark';
  modifier?: string;
  /** @deprecated DEPRECATED: remove that from all the projects */
  noPadding?: boolean;
  padding?: 'all' | 'vertical' | 'horizontal' | 'none';
  prefix?: ReactNode;
  title: ReactNode;
  titleMaxWidth?: string;
};

const NewHeader = ({
  actions,
  actionsPosition = 'end',
  alignment,
  className = '',
  details,
  mode,
  modifier = '',
  noPadding = false,
  padding = 'all',
  prefix,
  title,
  titleMaxWidth = '100%',
}: Props) => {
  const css = classNames({
    [`l-header--alignment-${alignment}`]: alignment,
    'l-header--no-padding': noPadding,
    [`l-header--padding-${padding}`]: padding,
  });

  const cssActions = classNames({
    [`l-header__actions--position-${actionsPosition}`]: actionsPosition,
  });

  const cssMode = classNames({
    [`${mode}`]: mode,
  });

  return (
    <div className={`l-header ${modifier} ${css} ${cssMode} ${className}`}>
      {prefix && <div className="l-header__prefix">{prefix}</div>}

      <div className="l-header__title" style={{ maxWidth: titleMaxWidth }}>
        {title}
      </div>

      {details && (
        <div className="l-header__details">
          {details.one && <div className="l-header__detail">{details.one}</div>}

          {details.two && <div className="l-header__detail">{details.two}</div>}

          {details.three && (
            <div className="l-header__detail">{details.three}</div>
          )}

          {details.four && (
            <div className="l-header__detail">{details.four}</div>
          )}

          {details.five && (
            <div className="l-header__detail">{details.five}</div>
          )}
        </div>
      )}

      {actions && (
        <div className={`l-header__actions ${cssActions}`}>
          {actions.one && actions.one}
          {actions.two && actions.two}
        </div>
      )}
    </div>
  );
};

NewHeader.displayName = 'NewHeader';

export default memo<Props>(NewHeader);
