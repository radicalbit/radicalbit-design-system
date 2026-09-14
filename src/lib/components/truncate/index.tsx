import {
  ReactNode, Ref, forwardRef, memo,
} from 'react';
import Tooltip, { Props as TooltipProps } from '@Components/tooltip';

interface Props {
  children: ReactNode;
  className?: string;
  modifier?: string;
  suffix: ReactNode;
  tooltip?: TooltipProps;
  width?: string;
  style?: object;
}

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

// Tooltip attaches a ref to its child, so the inner node has to forward one —
// a bare function component makes React warn and the tooltip lose its anchor.
const TruncateInner = forwardRef(({
  children,
  className = '',
  modifier = '',
  suffix,
  width,
  ...other
}: Props, ref: Ref<HTMLDivElement>) => {
  const style = other.style || {};

  return (
    <div ref={ref} className={`c-truncate ${modifier} ${className}`} {...other} style={{ ...style, width }}>
      <div className="c-truncate__body">{children}</div>
  
      {suffix && <div className="c-truncate__suffix">{suffix}</div>}
    </div>
  );
});

TruncateInner.displayName = 'TruncateInner';

Truncate.displayName = 'Truncate';

export default memo<Props>(Truncate);
