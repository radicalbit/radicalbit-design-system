import { IconDefinition, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  MouseEventHandler, ReactNode, memo, useState,
} from 'react';
import CopyToClipboard, { Props as CopyToClipboardProps } from '@Components/copy-to-clipboard';
import FontAwesomeIcon from '@Components/font-awesome-icon';
import { Props as TooltipProps } from '@Components/tooltip';

type Props = {
  className?: string,
  data: string,
  label?: ReactNode,
  modifier?: string,
  show?: boolean
  tooltipHide?: TooltipProps,
  tooltipReveal?: TooltipProps,
  copyToClipboard?: CopyToClipboardProps,
};

const DataSecret = ({
  className = '',
  data,
  label,
  modifier = '',
  show,
  tooltipReveal,
  tooltipHide,
  copyToClipboard,
}: Props) => {
  const [visible, setVisible] = useState(false);

  const copyToClipboardValue: CopyToClipboardProps | undefined = copyToClipboard ? { ...copyToClipboard, link: data } : undefined;

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
            {copyToClipboard
              ? <Data data={data} icon={faEyeSlash} tooltip={tooltipHide} copyToClipboard={copyToClipboardValue} />
              : <Data data={data} icon={faEyeSlash} tooltip={tooltipHide} />}
          </div>
        )
        : (
          <div className="m-data-secret__data">
            {visible
              ? <Data data={data} icon={faEyeSlash} onClick={handleSetHidden} tooltip={tooltipHide} copyToClipboard={copyToClipboardValue} />
              : <Data data={hiddenData} icon={faEye} onClick={handleSetVisible} tooltip={tooltipReveal} copyToClipboard={copyToClipboardValue} />}
          </div>
        )}
    </div>
  );
};

type DataProps = {
    data: string,
    icon: IconDefinition,
    onClick?: MouseEventHandler<SVGSVGElement>,
    tooltip?: TooltipProps,
    copyToClipboard?: CopyToClipboardProps,
};

function Data({
  data, onClick, icon, tooltip, copyToClipboard,
}: DataProps) {
  if (copyToClipboard) {
    return (
      <>
        <CopyToClipboard {...copyToClipboard}>{data}</CopyToClipboard>
        {onClick && <FontAwesomeIcon icon={icon} onClick={onClick} tooltip={tooltip} />}
      </>
    );
  }

  return (
    <>
      <span>{data}</span>
      {onClick && <FontAwesomeIcon icon={icon} onClick={onClick} tooltip={tooltip} />}
    </>
  );
}

DataSecret.displayName = 'DataSecret';

export default memo(DataSecret);
