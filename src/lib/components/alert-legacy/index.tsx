import { ReactNode } from 'react';

interface Props {
  type: 'success' | 'default' | 'error' | 'warning';
  icon?: ReactNode;
  text: string;
}

function Alert({ type, text, icon }: Props) {
  return (
    <div className={`c-alert-legacy c-alert-legacy--type-${type}`}>
      {icon && (
        <span className="c-alert-legacy__icon">
          {icon}
        </span>
      )}

      <span>{text}</span>
    </div>
  );
}

export default Alert;
