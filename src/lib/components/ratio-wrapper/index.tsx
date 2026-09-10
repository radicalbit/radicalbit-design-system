import { memo } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  modifier?: string;
  minWidth?: number;
  maxWidth?: number;
}

function RatioWrapper({
  children,
  className = '',
  modifier = '',
  maxWidth,
  minWidth,
}: Props) {
  const style = {
    minWidth: minWidth || '100%',
    maxWidth: maxWidth || '100%',
  };

  return (
    <div style={style} className={`l-ratio-wrapper ${modifier} ${className}`}>
      <div className="l-ratio-wrapper__container">
        <div className="l-ratio-wrapper__content">{children}</div>
      </div>
    </div>
  );
}

RatioWrapper.displayName = 'RatioWrapper';

export default memo<Props>(RatioWrapper);
