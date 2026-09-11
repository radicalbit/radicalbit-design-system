import React from 'react';

interface Props {
  bold: string;
  className?: string;
  isQuestion?: boolean;
  modifier?: string;
  text: string;
}

function TextWithBold({
  className = '', modifier = '', text, bold, isQuestion,
}: Props) {
  return (
    <div className={`m-text-with-bold ${modifier} ${className}`}>
      <span>{`${text} `}</span>
    
      <strong>{bold}</strong>
    
      {isQuestion && <span>{isQuestion && isQuestion === true ? '?' : ''}</span>}
    </div>
  );
}

TextWithBold.displayName = 'TextWithBold';

export default React.memo<Props>(TextWithBold);
