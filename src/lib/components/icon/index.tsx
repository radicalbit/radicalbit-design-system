import { ReactElement } from 'react';
import AntdIcon from 'antd/es/icon';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

function Icon(props: AntdIconProps): ReactElement<typeof AntdIcon> {
  return <AntdIcon
    {...props}
  />
}

export default Icon;
