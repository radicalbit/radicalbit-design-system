import { ReactElement } from 'react';
import AntdIcon from 'antd/lib/icon';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

const Icon = (props: AntdIconProps): ReactElement<typeof AntdIcon> => (
  <AntdIcon
    {...props}
  />
);

export default Icon;
