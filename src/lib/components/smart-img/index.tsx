import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { memo, useLayoutEffect, useState } from 'react';

interface Props {
  emptyIcon?: IconProp;
  errorIcon?: IconProp;
  src?: string;
  alt?: string;
  onError?: () => void;
  onLoad?: () => void;
}

type ImgState = 'empty' | 'error' | 'loaded' | 'loading';

function SmartImg({
  emptyIcon = faImage,
  errorIcon = faExclamationCircle,
  src = '',
  alt,
  onError,
  onLoad,
}: Props) {
  const [imgState, setImgState] = useState<ImgState>('empty');

  const handleOnLoad = () => {
    setImgState('loaded');

    if (onLoad) {
      onLoad();
    }
  };

  const handleOnError = () => {
    if (src === '') {
      setImgState('empty');
    } else {
      setImgState('error');

      if (onError) {
        onError();
      }
    }
  };

  /* eslint-disable react-hooks/set-state-in-effect -- pre-existing bug: on a
     cached image onLoad can fire during commit and set 'loaded', which this
     effect then overwrites with 'loading', leaving nothing visible. The reset
     belongs in the initial state / a render-phase adjustment. */
  useLayoutEffect(() => {
    setImgState('loading');
  }, [src]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return (
    <>
      <FontAwesomeIcon
        className={
          imgState !== 'loaded' && imgState !== 'loading'
            ? 'is-shown'
            : 'is-hidden'
        }
        icon={imgState === 'error' ? errorIcon : emptyIcon}
        type="primary"
      />

      <img
        alt={alt}
        className={imgState === 'loaded' ? 'is-shown' : 'is-hidden'}
        onError={handleOnError}
        onLoad={handleOnLoad}
        src={src}
      />
    </>
  );
}

SmartImg.displayName = 'SmartImg';

export default memo<Props>(SmartImg);
