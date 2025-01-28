import AntdAnchor, { AnchorProps } from 'antd/es/anchor';

export interface Props extends AnchorProps {
  className?: string,
  modifier?: string;
}

const Anchor = ({
  children,
  className = '',
  modifier = '',
  ...others
}: Props) => (

  <AntdAnchor
    className={`c-anchor ${modifier} ${className}`}
    {...others}
  >
    {children}
  </AntdAnchor>

);

Anchor.displayName = 'Anchor';

export default Anchor;
