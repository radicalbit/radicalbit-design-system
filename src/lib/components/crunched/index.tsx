import Badge from '@Components/badge';
import { useState } from 'react';

export type CrunchedProps = {
  type: 'success' | 'processing' | 'default' | 'error' | 'warning';
  text?: string;
};

const Crunched = ({ type, text }: CrunchedProps) => {
  const [messageIsVisible, setMessageVisible] = useState(false);

  const hideMessage = () => {
    setMessageVisible(false);
  };

  const showMessage = () => {
    setMessageVisible(true);
  };

  return (
    <div className={`rdb-crunched rdb-crunched-${type}`}>
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
