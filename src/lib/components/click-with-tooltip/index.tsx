import Tooltip from '@Components/tooltip';

interface Props {
  className?: string;
  children?: React.ReactNode;
  handleOnClick?: () => void;
  modifier?: string;
  tooltipTitle?: string;
}

function ClickWithTooltip({
  className = '',
  children,
  handleOnClick,
  modifier = '',
  tooltipTitle,
}: Props) {
  return (
    <Tooltip title={tooltipTitle}>
      <span className={`c-click-with-tooltip ${modifier} ${className}`}>
        <a role="presentation" onClick={handleOnClick}>
          {children}
        </a>
      </span>
    </Tooltip>
  );
}

ClickWithTooltip.displayName = 'ClickWithTooltip';

export default ClickWithTooltip;
