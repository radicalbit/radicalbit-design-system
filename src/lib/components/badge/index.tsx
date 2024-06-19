import AntBadge, { BadgeProps } from 'antd/lib/badge';

const Badge = (
  props: BadgeProps & { onMouseLeave?: () => void; onMouseEnter?: () => void }
) => <AntBadge {...props} />;

Badge.displayName = 'Badge';

export default Badge;
