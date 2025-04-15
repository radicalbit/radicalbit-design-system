/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

import Tooltip from '@Components/tooltip';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { memo } from 'react';

type Props = {
  className?: string,
  children?: React.ReactNode;
  description?: string;
  flexColumn?: boolean;
  label?: string | React.ReactNode;
  message?: string | React.ReactNode;
  modifier?: string;
  modifierContent?: string;
  required?: boolean;
  messageColor?: 'warning' | 'success' | 'error';
};

const FormField = ({
  children,
  className = '',
  flexColumn,
  description,
  label,
  message,
  modifier = '',
  modifierContent = '',
  required,
  messageColor = 'error',
  ...other
}: Props) => {
  const cssContent = classNames({
    'c-form-field__content--flex-column': flexColumn,
  });

  return (
    <div className={`c-form-field ${className} ${modifier}`} {...other}>
      {label && (
        <div className="c-form-field__label">
          <label>
            {label}
            {required && '*'}
          </label>

          {description && (
            <Tooltip title={description} mouseEnterDelay={0.5}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </Tooltip>
          )}
        </div>
      )}

      <div className={`c-form-field__content ${modifierContent} ${cssContent}`}>{children}</div>

      {message && (
        <span
          className={`c-form-field__message c-form-field__message--${messageColor}`}
        >
          {message}
        </span>
      )}
    </div>
  );
};

FormField.displayName = 'FormField';

export default memo<Props>(FormField);
