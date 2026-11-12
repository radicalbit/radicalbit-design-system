import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode } from 'react';

type PartProps = HTMLAttributes<HTMLElement> & {
  type?: 'secondary' | 'success' | 'warning' | 'error';
};

interface Props {
  bold: ReactNode;
  boldProps?: PartProps;
  className?: string;
  isQuestion?: boolean;
  modifier?: string;
  text: ReactNode;
  textProps?: PartProps;
}

function TextWithBold({
  bold, boldProps = {}, className = '', isQuestion, modifier = '', text, textProps = {},
}: Props) {
  const { className: textClassName, type: textType, ...textRest } = textProps;
  const { className: boldClassName, type: boldType, ...boldRest } = boldProps;

  return (
    <div className={`m-text-with-bold ${modifier} ${className}`}>
      <span
        {...textRest}
        className={classNames({ [`m-text-with-bold__text--type-${textType}`]: textType }, textClassName)}
      >
        {text}
        {' '}
      </span>

      <strong
        {...boldRest}
        className={classNames({ [`m-text-with-bold__bold--type-${boldType}`]: boldType }, boldClassName)}
      >
        {bold}
      </strong>

      {isQuestion && <span>?</span>}
    </div>
  );
}

TextWithBold.displayName = 'TextWithBold';

export default React.memo<Props>(TextWithBold);
