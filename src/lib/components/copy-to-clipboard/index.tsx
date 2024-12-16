import Tooltip, { Props as TooltipProps } from '@Components/tooltip';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export type Props = {
  className?: string;
  actionHint?: string;
  actionDoneHint?: string;
  children?: React.ReactNode;
  icon?: IconProp;
  link: string;
  modifier?: string;
  onCopied?: () => void;
  tooltip?: TooltipProps;
};

const CopyToClipboard = ({
  actionHint = 'Click to copy',
  actionDoneHint = 'Copied!',
  className = '',
  children,
  icon = faCopy,
  link,
  modifier = '',
  onCopied,
  tooltip = {},
}: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const tooltipTitle = isCopied ? actionDoneHint : actionHint;

  const handleOnCopy = async () => {
    await navigator.clipboard.writeText(link);
    setIsCopied(true);

    if (onCopied) onCopied();
  };

  const handleOnOpenChange = (value: boolean) => {
    if (tooltip.onOpenChange) {
      tooltip.onOpenChange(value);
    }

    setIsCopied(false);
  };

  return (
    <Tooltip
      placement="top"
      {...tooltip} // We don't want to override onOpenChange and title, so we spead tooltip here
      onOpenChange={handleOnOpenChange}
      title={tooltipTitle}
    >
      {children ? (
        <div
          onClick={handleOnCopy}
          role="presentation"
          className={`m-copy-to-clipboard ${modifier} ${className}`}
        >
          {children}
        </div>
      ) : (
        <FontAwesomeIcon
          onClick={handleOnCopy}
          icon={icon}
          className={`m-copy-to-clipboard ${modifier} ${className}`}
        />
      )}
    </Tooltip>
  );
};

export default CopyToClipboard;
