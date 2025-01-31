import { ReactNode, memo } from 'react';
import AntdSpin, { SpinProps } from 'antd/es/spin';
import classNames from 'classnames';

type Props = SpinProps & {
  centered?: boolean;
  containerModifier?: string;
  error?: ReactNode;
  fullHeight?: boolean;
  fullWidth?: boolean;
  hideChildren?: boolean;
  isError?: boolean;
  isFormWrapper?: boolean;
  modifier?: string;
};

const Spinner = ({
  children,
  className = '',
  error,
  isError,
  isFormWrapper,
  modifier = '',
  centered,
  containerModifier = '',
  spinning,
  hideChildren,
  fullHeight = true,
  fullWidth = true,
  ...otherProps
}: Props) => {
  const isSpinning = spinning === undefined ? false : spinning;

  const css = classNames({
    'c-spinner--full-height': fullHeight,
    'c-spinner--full-width': fullWidth,
    'c-spinner--form-wrapper': isFormWrapper,
    'c-spinner--centered': centered,
  });

  return isError ? (
    <>{error}</>
  ) : (
    <AntdSpin
      wrapperClassName={`c-spinner ${css} ${modifier} ${className}`}
      spinning={isSpinning}
      {...otherProps}
    >
      {hideChildren && isSpinning ? (
        <div className="c-spinner__mask" />
      ) : (
        <div className={`c-spinner__container ${containerModifier}`}>
          {children}
        </div>
      )}
    </AntdSpin>
  );
};

Spinner.displayName = 'Spinner';

export default memo(Spinner);
