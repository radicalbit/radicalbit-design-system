import AntBadge, { BadgeProps } from 'antd/es/badge';

export interface Props extends BadgeProps {
  modifier?: string;
  onMouseLeave?: () => void;
  onMouseEnter?: () => void
}

const Badge = (
  {
    className = '',
    modifier = '',
    ...other
  }: Props
) => <AntBadge className={`c-badge ${modifier} ${className}`} {...other} />;

Badge.displayName = 'Badge';

export default Badge;
