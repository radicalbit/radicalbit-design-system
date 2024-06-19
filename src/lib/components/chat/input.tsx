import { TextArea } from '@Components/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler, Ref, memo } from 'react';
import { TextAreaRef } from 'antd/lib/input/TextArea';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  icon?: IconProp;
  minRows?: number;
  maxRows?: number;
  onSend?: MouseEventHandler<SVGSVGElement>;
  textAreaRef?: Ref<TextAreaRef>;
};

const ChatInput = ({
  icon = faPaperPlane,
  minRows = 1,
  maxRows = 4,
  onSend,
  textAreaRef,
  ...others
}: Props) => (
  <div className="m-chat-input">
    <TextArea autoSize={{ minRows, maxRows }} ref={textAreaRef} {...others} />
    <FontAwesomeIcon
      className="m-chat-input__button"
      icon={icon}
      onClick={onSend}
    />
  </div>
);

ChatInput.displayName = 'ChatInput';

export default memo<Props>(ChatInput);
