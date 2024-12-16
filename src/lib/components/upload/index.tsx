import { ReactNode } from 'react';
import AntdUpload from 'antd/lib/upload';
import classNames from 'classnames';
import { UploadProps, UploadType } from 'antd/lib/upload/interface';
import Dragger from './dragger';

type Props = UploadProps & {
  behavior?: 'hide-button';
  children?: ReactNode;
  modifier?: string;
  type?: UploadType;
};

const Upload = ({
  behavior,
  children,
  className = '',
  modifier = '',
  type,
  ...others
}: Props) => {
  const css = classNames({
    [`c-upload--${type}`]: type,
    [`c-upload--${behavior}`]: behavior,
  });
  
  return (
    <AntdUpload
      className={`c-upload ${css} ${className} ${modifier}`}
      {...others}
    >
      {children}
    </AntdUpload>
  );
};

Upload.Dragger = Dragger;

Upload.displayName = 'Upload';

export default Upload;
