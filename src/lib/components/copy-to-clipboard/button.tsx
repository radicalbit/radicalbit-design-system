import Button, { Props as ButtonProps } from '@Components/button';
import { memo, useState } from 'react';

type Props = {
  className?: string;
  icon?: React.ReactNode;
  link: string;
  onCopied?: () => void;
  successText?: string;
  text?: string;
  type?: ButtonProps['type'];
};

const COPIED = 'Copied!';

const CopyToClipboardButton = ({
  className = '',
  link,
  onCopied,
  successText = COPIED,
  text = 'Click to Copy',
  type,
  ...others
}: Props) => {
  const [buttonText, setButtonText] = useState(text);

  const handleOnCopy = async () => {
    await navigator.clipboard.writeText(link);

    setButtonText(successText);
    setTimeout(() => {
      setButtonText(text);
    }, 3000);
    if (onCopied) onCopied();
  };

  return (
    <Button
      className={`m-copy-to-clipboard-button ${className}`}
      onClick={handleOnCopy}
      type={type}
      {...others}
    >
      {buttonText}
    </Button>
  );
};

export default memo<Props>(CopyToClipboardButton);
