import { ReactNode } from 'react';

type Props = {
  type: 'success' | 'default' | 'error' | 'warning',
  icon?: ReactNode,
  text: string
};

const Alert = ({ type, text, icon }: Props) => (
  <div className={`c-alert-legacy c-alert-legacy--type-${type}`}>
    {icon && (
      <span className="c-alert-legacy__icon">
        {icon}
      </span>
    )}

    <span>{text}</span>
  </div>
);

export default Alert;
