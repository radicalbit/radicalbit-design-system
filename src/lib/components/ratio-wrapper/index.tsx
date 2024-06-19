import { memo } from 'react';

type Props = {
  children: React.ReactNode;
  modifier?: string;
  minWidth?: number;
  maxWidth?: number;
};

const RatioWrapper = ({
  children,
  modifier = '',
  maxWidth,
  minWidth,
}: Props) => {
  const style = {
    minWidth: minWidth || '100%',
    maxWidth: maxWidth || '100%',
  };

  return (
    <div style={style} className={`l-ratio-wrapper ${modifier}`}>
      <div className="l-ratio-wrapper__container">
        <div className="l-ratio-wrapper__content">{children}</div>
      </div>
    </div>
  );
};

RatioWrapper.displayName = 'RatioWrapper';

export default memo<Props>(RatioWrapper);
