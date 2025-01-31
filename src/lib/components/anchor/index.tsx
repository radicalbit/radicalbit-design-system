import AntdAnchor, { AnchorProps } from 'antd/es/anchor';

export interface Props extends AnchorProps {
  className?: string,
  modifier?: string;
}

const Anchor = ({
  className = '',
  modifier = '',
  ...others
}: Props) => (

  <AntdAnchor
    className={`c-anchor ${modifier} ${className}`}
    {...others}
  >
  </AntdAnchor>

);

Anchor.displayName = 'Anchor';

export default Anchor;
