import Tooltip from '@Components/tooltip';

type Props = {
  children?: React.ReactNode;
  className?: string;
  handleOnClick?: () => void;
  modifier?: string;
  tooltipTitle?: string;
};

const ClickWithTooltip = ({
  children,
  className = '',
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
