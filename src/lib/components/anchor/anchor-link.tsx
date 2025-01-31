import AntdAnchor, { AnchorLinkProps } from 'antd/es/anchor';

const { Link } = AntdAnchor;

const CustomLink = ({ children, ...others }: AnchorLinkProps) => (
  <Link {...others}>{children}</Link>
);

CustomLink.displayName = 'CustomLink';

export default CustomLink;
