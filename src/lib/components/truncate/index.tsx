import { ReactNode, memo } from 'react';
import Tooltip, { Props as TooltipProps } from '@Components/tooltip';

type Props = {
  children: ReactNode;
  className?: string;
  modifier?: string;
  suffix: ReactNode;
  tooltip?: TooltipProps;
  width?: string
  style?: object
};

function Truncate(props: Props) {
  if (props.tooltip) {
    return (
      <Tooltip {...props.tooltip}>
        <TruncateInner {...props} />
      </Tooltip>
    );
  }

  return <TruncateInner {...props} />;
}

function TruncateInner({
  children,
  className = '',
  modifier = '',
  suffix,
  width,
  ...other
}: Props) {
  const style = other.style || {};

  return (
    <div className={`c-truncate ${modifier} ${className}`} {...other} style={{ ...style, width }}>
      <div className="c-truncate__body">{children}</div>
  
      {suffix && <div className="c-truncate__suffix">{suffix}</div>}
    </div>
  );
}

Truncate.displayName = 'Truncate';

export default memo<Props>(Truncate);
