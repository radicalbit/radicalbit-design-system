import AntdAnchor, { AnchorProps } from 'antd/lib/anchor';

const Anchor = ({ children, className = '', ...others }: AnchorProps) => (

  <AntdAnchor
    className={`c-anchor ${className}`}
    {...others}
  >
    {children}
  </AntdAnchor>

);

Anchor.displayName = 'Anchor';

export default Anchor;
