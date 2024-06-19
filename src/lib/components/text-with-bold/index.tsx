import React from 'react';

type Props = {
  bold: string;
  text: string;
  isQuestion?: boolean;
};

const TextWithBold = ({ text, bold, isQuestion }: Props) => (
  <>
    <span>{text}</span>
    {' '}
    <strong>{bold}</strong>
    {isQuestion && <span>{isQuestion && isQuestion === true ? '?' : ''}</span>}
  </>
);

TextWithBold.displayName = 'TextWithBold';

export default React.memo<Props>(TextWithBold);
