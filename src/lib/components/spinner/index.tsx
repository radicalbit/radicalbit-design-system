import { ReactNode, memo } from 'react';
import AntdSpin, { SpinProps } from 'antd/lib/spin';
import classNames from 'classnames';

type Props = SpinProps & {
  error?: ReactNode;
  isError?: boolean;
  isFormWrapper?: boolean;
  hideChildren?: boolean;
  modifier?: string;
  containerModifier?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  centered?: boolean;
};

const Spinner = (props: Props) => {
  const {
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
  } = props;

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
