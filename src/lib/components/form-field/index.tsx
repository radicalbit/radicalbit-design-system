/* eslint-disable jsx-a11y/label-has-for */

import Tooltip from '@Components/tooltip';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { memo, useId } from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  description?: string;
  flexColumn?: boolean;
  htmlFor?: string;
  label?: string | React.ReactNode;
  message?: string | React.ReactNode;
  modifier?: string;
  modifierContent?: string;
  required?: boolean;
  messageColor?: 'warning' | 'success' | 'error';
  width?: number | string;
}

function formatWidth(width?: number | string): string | undefined {
  if (typeof width === 'number') {
    return `${width}px`;
  }

  return width;
}

function FormField({
  children,
  className = '',
  flexColumn,
  description,
  htmlFor,
  label,
  message,
  modifier = '',
  modifierContent = '',
  required,
  messageColor = 'error',
  width,
  ...other
}: Props) {
  const cssContent = classNames({
    'c-form-field__content--flex-column': flexColumn,
  });

  const widthStyles = formatWidth(width);

  const generatedId = useId();
  const messageId = `${generatedId}-message`;
  const isError = !!message && messageColor === 'error';

  const isSingleControl = React.Children.count(children) === 1
    && React.isValidElement(children)
    && children.type !== React.Fragment;
  const control = isSingleControl ? (children as React.ReactElement<Record<string, unknown>>) : undefined;
  const controlProps = control?.props ?? {};
  const controlId = (controlProps.id as string | undefined) ?? (control ? generatedId : undefined);
  const labelFor = htmlFor ?? controlId;

  const content = control
    ? React.cloneElement(control, {
      id: controlId,
      'aria-describedby': controlProps['aria-describedby'] ?? (message ? messageId : undefined),
      'aria-invalid': controlProps['aria-invalid'] ?? (isError || undefined),
      'aria-required': controlProps['aria-required'] ?? (required || undefined),
    })
    : children;

  return (
    <div className={`c-form-field ${className} ${modifier}`} {...other} style={{ width: widthStyles }}>
      {label && (
        <div className="c-form-field__label">
          <label htmlFor={labelFor}>
            {label}
            {required && <span aria-hidden="true">*</span>}
          </label>

          {description && (
            <Tooltip title={description} mouseEnterDelay={0.5}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </Tooltip>
          )}
        </div>
      )}

      <div className={`c-form-field__content ${modifierContent} ${cssContent}`}>{content}</div>

      {message && (
        <span
          className={`c-form-field__message c-form-field__message--${messageColor}`}
          id={messageId}
          role={isError ? 'alert' : undefined}
        >
          {message}
        </span>
      )}
    </div>
  );
}

FormField.displayName = 'FormField';

export default memo<Props>(FormField);
