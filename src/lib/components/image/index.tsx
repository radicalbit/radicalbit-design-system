import { CSSProperties, memo, useState } from 'react';

type Sizes = 'small' | 'medium' | 'large';
type Props = {
  /** Style properties of icon, like fontSize and color */
  style?: CSSProperties;
  /** Set image size */
  size?: Sizes;
  /** The path to the image */
  src?: string;
  /** Image alternate text */
  alt?: string;
  /** Image error message or custom component */
  error?: string | React.ReactNode;
};

const SIZES = {
  small: 'm-image--small',
  medium: 'm-image--medium',
  large: 'm-image--large',
};

const Image = ({
  src, alt, style, size = 'small', error,
}: Props) => {
  const [isError, setIsError] = useState(false);

  if (!Object.keys(SIZES).includes(size)) {
    throw new Error('The specified size is not available');
  }

  return !isError ? (
    <img
      className={`m-image ${SIZES[size]}`}
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
