import Tooltip from '@Components/tooltip';

type Props = {
  className?: string;
  children?: React.ReactNode;
  handleOnClick?: () => void;
  modifier?: string;
  tooltipTitle?: string;
};

const ClickWithTooltip = ({
  className = '',
  children,
  handleOnClick,
  modifier = '',
  tooltipTitle,
}: Props) => (
  <Tooltip title={tooltipTitle}>
    <span className={`c-click-with-tooltip ${modifier} ${className}`}>
      <a role="presentation" onClick={handleOnClick}>
        {children}
      </a>
    </span>
  </Tooltip>
);

ClickWithTooltip.displayName = 'ClickWithTooltip';

export default ClickWithTooltip;
