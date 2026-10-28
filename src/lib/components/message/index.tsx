import AntdMessage from 'antd/es/message';
import type { ArgsProps, NoticeType } from 'antd/es/message/interface';
import { isValidElement, ReactNode } from 'react';

const DEFAULT_DURATION = 5;

const POLITE_TYPES: NoticeType[] = ['info', 'loading', 'success'];

type Content = ReactNode | ArgsProps;

const isArgsProps = (content: Content): content is ArgsProps => (
  typeof content === 'object' && content !== null && !isValidElement(content) && 'content' in content
);

const open = (config: ArgsProps) => {
  const role = POLITE_TYPES.includes(config.type ?? 'info') ? 'status' : 'alert';

  return AntdMessage.open({ duration: DEFAULT_DURATION, role, ...config } as ArgsProps);
};

const openType = (type: NoticeType) => (content: Content, duration?: number, onClose?: () => void) => {
  const config = isArgsProps(content) ? content : { content };

  return open({
    ...config,
    type,
    ...(duration !== undefined && { duration }),
    ...(onClose && { onClose }),
  });
};

const Message = {
  ...AntdMessage,
  open,
  info: openType('info'),
  success: openType('success'),
  error: openType('error'),
  warning: openType('warning'),
  loading: openType('loading'),
};

export default Message;
