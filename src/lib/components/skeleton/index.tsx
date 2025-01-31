import AntdSkeleton, { SkeletonProps } from 'antd/es/skeleton';
const {
  Button, Avatar, Input, Image, Node,
} = AntdSkeleton;
const Skeleton = (props: SkeletonProps) => <AntdSkeleton {...props} />;

Skeleton.displayName = 'Skeleton';
Skeleton.Button = Button;
Skeleton.Avatar = Avatar;
Skeleton.Input = Input;
Skeleton.Image = Image;
Skeleton.Node = Node;

export default Skeleton;
