import { TextArea } from '@Components/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler, Ref, memo } from 'react';
import { TextAreaRef } from 'antd/es/input/TextArea';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Props {
  className?: string;
  icon?: IconProp;
  minRows?: number;
  maxRows?: number;
  modifier?: string;
  onSend?: MouseEventHandler<SVGSVGElement>;
  textAreaRef?: Ref<TextAreaRef>;
}

function ChatInput({
  className = '',
  icon = faPaperPlane,
  minRows = 1,
  maxRows = 4,
  modifier = '',
  onSend,
  textAreaRef,
  ...others
}: Props) {
  return <div className={`m-chat-input ${modifier} ${className}`}>
    <TextArea autoSize={{ minRows, maxRows }} ref={textAreaRef} {...others} />
    
    <FontAwesomeIcon
      className="m-chat-input__button"
      icon={icon}
      onClick={onSend}
    />
  </div>
}

ChatInput.displayName = 'ChatInput';

export default memo<Props>(ChatInput);
