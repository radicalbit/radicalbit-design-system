import { ReactNode } from 'react';
import AntdUpload from 'antd/lib/upload';
import classNames from 'classnames';
import { UploadProps, UploadType } from 'antd/lib/upload/interface';
import Dragger from './dragger';

type Props = UploadProps & {
  className?: string;
  modifier?: string;
  behavior?: 'hide-button';
  type?: UploadType;
  children?: ReactNode;
};

const Upload = ({
  className = '',
  modifier = '',
  behavior,
  type,
  children,
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
