import Tooltip from '@Components/tooltip';

type Props = {
  handleOnClick?: () => void;
  tooltipTitle?: string;
  children?: React.ReactNode;
};

const ClickWithTooltip = ({ handleOnClick, tooltipTitle, children }: Props) => (
  <Tooltip title={tooltipTitle}>
    <span className="c-click-with-tooltip">
      <a role="presentation" onClick={handleOnClick}>
        {children}
      </a>
    </span>
  </Tooltip>
);

ClickWithTooltip.displayName = 'ClickWithTooltip';

export default ClickWithTooltip;
