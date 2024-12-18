import Badge from '@Components/badge';
import { useState } from 'react';

export type CrunchedProps = {
  className?: string;
  modifier?: string;
  text?: string;
  type: 'success' | 'processing' | 'default' | 'error' | 'warning';
};

const Crunched = ({
  className = '',
  modifier = '',
  type,
  text,
}: CrunchedProps) => {
  const [messageIsVisible, setMessageVisible] = useState(false);

  const hideMessage = () => {
    setMessageVisible(false);
  };

  const showMessage = () => {
    setMessageVisible(true);
  };

  return (
    <div className={`rdb-crunched rdb-crunched-${type} ${modifier} ${className}`}>
      {messageIsVisible && text !== undefined && (
        <div className="rdb-crunched-text">
          <span>{text}</span>
        </div>
      )}

      <Badge
        status={type}
        onMouseLeave={hideMessage}
        onMouseEnter={showMessage}
      />
    </div>
  );
};

Crunched.displayName = 'Crunched';

export default Crunched;
