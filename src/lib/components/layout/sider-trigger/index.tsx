import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';

interface Props {
  collapsed?: boolean;
  collapseLabel: string;
  expandLabel: string;
}

function SiderTrigger({ collapsed = false, collapseLabel, expandLabel }: Props) {
  if (collapsed) {
    return (
      <button aria-expanded={false} aria-label={expandLabel} className="l-sider-trigger" type="button">
        <RightOutlined />
      </button>
    );
  }

  return (
    <button aria-expanded aria-label={collapseLabel} className="l-sider-trigger" type="button">
      <LeftOutlined />
    </button>
  );
}

export default SiderTrigger;
