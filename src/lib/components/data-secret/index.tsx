import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  MouseEventHandler, ReactNode, memo, useState,
} from 'react';

type Props = {
  className?: string,
  data: string,
  label?: ReactNode,
  modifier?: string,
  show?: boolean
};

const DataSecret = ({
  className = '',
  data,
  label,
  modifier = '',
  show,
}: Props) => {
  const [visible, setVisible] = useState(false);

  const hiddenData = '*'.repeat(data ? data.length : 0);
  const handleSetVisible: MouseEventHandler<SVGSVGElement> = (e) => {
    e.stopPropagation();
    setVisible(true);
  };

  const handleSetHidden: MouseEventHandler<SVGSVGElement> = (e) => {
    e.stopPropagation();
    setVisible(false);
  };

  return (
    <div className={`m-data-secret ${modifier} ${className}`}>
      {label && (
        <div className="m-data-secret__label">
          {label}
        </div>
      )}

      {show
        ? (
          <div className="m-data-secret__data">
            <span>{data}</span>
          </div>
        )
        : (
          <div className="m-data-secret__data">
            {visible
              ? <Visible data={data} onClick={handleSetHidden} />
              : <Hidden data={hiddenData} onClick={handleSetVisible} />}
          </div>
        )}
    </div>
  );
};

type DataProps = {
  data: string,
  onClick: MouseEventHandler<SVGSVGElement>
};

const Visible = ({ data, onClick }: DataProps) => (
  <>
    <span>{data}</span>
    <FontAwesomeIcon icon={faEye} onClick={onClick} />
  </>
);

const Hidden = ({ data, onClick }: DataProps) => (
  <>
    <span>{data}</span>
    <FontAwesomeIcon icon={faEyeSlash} onClick={onClick} />
  </>
);

DataSecret.displayName = 'DataSecret';

export default memo(DataSecret);
