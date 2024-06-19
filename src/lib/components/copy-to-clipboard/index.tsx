import Tooltip from '@Components/tooltip';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type Props = {
  actionHint?: string;
  children?: React.ReactNode;
  icon?: IconProp;
  link: string;
  onCopied?: () => void;
  modifier?: string;
};

const COPIED = 'Copied!';

const CopyToClipboard = ({
  actionHint = 'Click to copy',
  children,
  icon = faCopy,
  link,
  onCopied,
  modifier = '',
}: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleOnCopy = async () => {
    await navigator.clipboard.writeText(link);
    setIsCopied(true);

    if (onCopied) onCopied();
  };

  const handleOnOpenChange = () => setIsCopied(false);

  return (
    <Tooltip
      onOpenChange={handleOnOpenChange}
      placement="top"
      title={isCopied ? COPIED : actionHint}
    >
      {children ? (
        <div
          onClick={handleOnCopy}
          role="presentation"
          className={`m-copy-to-clipboard ${modifier}`}
        >
          {children}
        </div>
      ) : (
        <FontAwesomeIcon
          onClick={handleOnCopy}
          icon={icon}
          className={`m-copy-to-clipboard ${modifier}`}
        />
      )}
    </Tooltip>
  );
};

export default CopyToClipboard;
