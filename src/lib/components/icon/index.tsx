import { ReactElement } from 'react';
import AntdIcon from 'antd/es/icon';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

const Icon = (props: AntdIconProps): ReactElement<typeof AntdIcon> => (
  <AntdIcon
    {...props}
  />
);

export default Icon;
