import { ReactNode, isValidElement } from 'react';
import AntdPopconfirm, { PopconfirmProps } from 'antd/lib/popconfirm';
import classNames from 'classnames';

 interface Props extends PopconfirmProps {
    hideCancel?: boolean,
    icon?: ReactNode,
    label: ReactNode,
    modifier?: string,
    okText?: string,
    title: ReactNode,
    width?: number,
    withBody?: boolean,
    wrapTitle?: boolean
}

const Popconfirm = (props: Props) => {
  const {
    cancelText,
    hideCancel = false,
    icon,
    label,
    modifier = '',
    okText,
    okType,
    onCancel,
    onConfirm,
    title,
    width,
    withBody,
    wrapTitle = true,
    ...others
  } = props;

  const css = classNames({
    'c-popconfirm--hidden-cancel': hideCancel,
    'c-popconfirm--wrap-title': wrapTitle,
    'c-popconfirm--with-body': withBody,
  });

  return (
    <AntdPopconfirm
      overlayStyle={{
        width,
      }}
      title={title}
      cancelText={cancelText}
      okText={okText}
      okType={okType}
      onConfirm={onConfirm}
      onCancel={onCancel}
      icon={icon}
      overlayClassName={`c-popconfirm ${css} ${modifier}`}
      {...others}
    >
      {isValidElement(label)
        ? label
        : (<a>{label}</a>)}
    </AntdPopconfirm>
  );
};

Popconfirm.displayName = 'Popconfirm';

export default Popconfirm;
