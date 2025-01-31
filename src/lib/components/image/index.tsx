import { CSSProperties, memo, useState } from 'react';

type Props = {
  alt?: string;
  className?: string;
  error?: string | React.ReactNode;
  modifier?: string;
  size?: 'small' | 'medium' | 'large';
  src?: string;
  style?: CSSProperties;
};

const SIZES = {
  small: 'm-image--small',
  medium: 'm-image--medium',
  large: 'm-image--large',
};

const Image = ({
  alt,
  className = '',
  error,
  modifier = '',
  size = 'small',
  src,
  style,
}: Props) => {
  const [isError, setIsError] = useState(false);

  if (!Object.keys(SIZES).includes(size)) {
    throw new Error('The specified size is not available');
  }

  return !isError ? (
    <img
      className={`m-image ${SIZES[size]} ${className} ${modifier}`}
      style={style}
      src={src}
      onError={() => setIsError(true)}
      alt={alt}
      key={src}
    />
  ) : (
    <>{error}</> || <span>{alt}</span>
  );
};

Image.displayName = 'Image';

export default memo<Props>(Image);
