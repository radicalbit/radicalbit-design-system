import classNames from 'classnames';
import { ReactNode, memo } from 'react';

type Props = {
  badge?: ReactNode;
  modifier?: string;
  subtitle?: string;
  title?: string;
  onClick?: () => void;
};

const RbitAvatar = (props: Props) => {
  const {
    badge, modifier = '', subtitle, title, onClick,
  } = props;

  const css = classNames({
    'l-rbit-avatar--clickable': !!onClick,
  });

  return (
    <div
      onClick={onClick}
      role="presentation"
      className={`l-rbit-avatar ${css} ${modifier}`}
    >
      <div className="l-rbit-avatar__badge">{badge}</div>

      <div className="l-rbit-avatar__name">
        <strong>{title}</strong>
        {subtitle && <div>{subtitle}</div>}
      </div>
    </div>
  );
};

export default memo<Props>(RbitAvatar);
