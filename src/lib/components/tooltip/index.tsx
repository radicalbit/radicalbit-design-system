import AntdTooltip, { TooltipProps } from 'antd/lib/tooltip';
import TooltipTitle from './tooltip-title';

export type Props = TooltipProps & {
  modifier?: string,
}

function Tooltip({
  className = '',
  modifier = '',
  children,
  ...others
}: Props) {
  return (
    <AntdTooltip mouseEnterDelay={0.5} className={`m-tooltip ${modifier} ${className}`} {...others}>
      {children}
    </AntdTooltip>
  );
}

Tooltip.displayName = 'Tooltip';
Tooltip.TooltipTitle = TooltipTitle;

export default Tooltip;
