import AntdTooltip from 'antd/lib/tooltip';
import type { TooltipProps } from 'antd/lib/tooltip';

const Tooltip = ({ children, ...others }: TooltipProps) => (
  <AntdTooltip mouseEnterDelay={0.5} {...others}>
    {children}
  </AntdTooltip>
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
