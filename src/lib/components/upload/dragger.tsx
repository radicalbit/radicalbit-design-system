import AntdUpload from 'antd/es/upload';
import { UploadProps, UploadType } from 'antd/es/upload/interface';
import { ReactNode } from 'react';

type Props = UploadProps & {
  children?: ReactNode;
  className?: string;
  modifier?: string;
  type?: UploadType;
};

const Dragger = ({
  children,
  className = '',
  modifier = '',
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
