import { ReactElement } from 'react';
import AntdIcon, { IconComponentProps } from '@ant-design/icons/lib/components/AntdIcon';

function Icon(props: IconComponentProps): ReactElement<typeof AntdIcon> {
  return (
    <AntdIcon
      {...props}
    />
  );
}

export default Icon;
