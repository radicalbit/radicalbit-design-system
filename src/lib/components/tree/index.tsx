import AntdTree, { TreeProps } from 'antd/es/tree';
import { ReactElement } from 'react';

export interface Props extends TreeProps{
    modifier?: string
}

function Tree({
  modifier = '',
  className = '',
  ...others
}: Props): ReactElement<typeof AntdTree> {
  return (
    <AntdTree
      className={`c-tree ${modifier} ${className}`}
      {...others}
    />
  );
}

Tree.displayName = 'Tree';

export default Tree;
