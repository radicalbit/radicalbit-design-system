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
  isInsecureContext?: boolean;
  link: string;
  modifier?: string;
  onCopied?: () => void;
  tooltip?: TooltipProps;
};

const CopyToClipboard = ({
  isInsecureContext = !window.isSecureContext,
  ...props
}: Props) => {
  if (isInsecureContext) {
    return <CopyToClipboardInsecure {...props} />;
  }

  return <CopyToClipboardInner {...props} />;
};

const CopyToClipboardInsecure = ({
  children,
  icon = faCopy,
  modifier = '',
  className = '',
  tooltip = {},
}: Pick<Props, 'children' | 'icon' | 'modifier' | 'className' | 'tooltip'>) => {
  const cssClasses = `m-copy-to-clipboard m-copy-to-clipboard--disabled ${modifier} ${className}`;

  return (
    <Tooltip
      placement="top"
      title="Copy to clipboard requires a secure (HTTPS) connection"
      {...tooltip}
    >
      {children ? (
        <div
          role="presentation"
          className={cssClasses}
        >
          {children}
        </div>
      ) : (
        <FontAwesomeIcon
          icon={icon}
          className={cssClasses}
        />
      )}
    </Tooltip>
  );
};

const CopyToClipboardInner = ({
  children,
  icon = faCopy,
  link,
  modifier = '',
  className = '',
  actionHint = 'Click to copy',
  actionDoneHint = 'Copied!',
  onCopied,
  tooltip = {},
}: Omit<Props, 'isInsecureContext'>) => {
  const [isCopied, setIsCopied] = useState(false);

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

  const cssClasses = `m-copy-to-clipboard ${modifier} ${className}`;

  return (
    <Tooltip
      placement="top"
      title={isCopied ? actionDoneHint : actionHint}
      {...tooltip}
      onOpenChange={handleOnOpenChange}
    >
      {children ? (
        <div
          onClick={handleOnCopy}
          role="presentation"
          className={cssClasses}
        >
          {children}
        </div>
      ) : (
        <FontAwesomeIcon
          onClick={handleOnCopy}
          icon={icon}
          className={cssClasses}
        />
      )}
    </Tooltip>
  );
};

export default CopyToClipboard;
