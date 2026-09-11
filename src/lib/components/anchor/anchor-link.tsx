import AntdAnchor, { AnchorLinkProps } from 'antd/es/anchor';

const { Link } = AntdAnchor;

function CustomLink({ children, ...others }: AnchorLinkProps) {
  return <Link {...others}>{children}</Link>;
}

CustomLink.displayName = 'CustomLink';

export default CustomLink;
