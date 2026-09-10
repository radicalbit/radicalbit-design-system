import AntdSkeleton, { SkeletonProps } from 'antd/es/skeleton';
const {
  Button, Avatar, Input, Image, Node,
} = AntdSkeleton;
function Skeleton(props: SkeletonProps) {
  return <AntdSkeleton {...props} />;
}

Skeleton.displayName = 'Skeleton';
Skeleton.Button = Button;
Skeleton.Avatar = Avatar;
Skeleton.Input = Input;
Skeleton.Image = Image;
Skeleton.Node = Node;

export default Skeleton;
