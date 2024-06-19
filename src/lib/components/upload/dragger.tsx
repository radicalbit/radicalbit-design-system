import AntdUpload from 'antd/lib/upload';
import { UploadProps, UploadType } from 'antd/lib/upload/interface';
import { ReactNode } from 'react';

type Props = UploadProps & {
  className?: string;
  modifier?: string;
  type?: UploadType;
  children?: ReactNode;
};

const Dragger = ({
  className = '',
  modifier = '',
  children,
  ...others
}: Props) => (
  <AntdUpload.Dragger
    className={`c-upload-drag  ${className} ${modifier}`}
    {...others}
  >
    {children}
  </AntdUpload.Dragger>
);

Dragger.displayName = 'Dragger';

export default Dragger;
