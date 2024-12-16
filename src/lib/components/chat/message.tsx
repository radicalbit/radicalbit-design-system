import classNames from 'classnames';
import Tag from '@Components/tag';
import Quote from '@Components/chat/quote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Props = {
  actions?: ReactNode[];
  className?: string;
  isReplied?: boolean;
  message: ReactNode;
  modifier?: string;
  name: ReactNode;
  replyMessage?: ReactNode;
  replyName?: ReactNode;
  small?: boolean;
  status: 'unactive' | 'activeOnHover';
  tagContent?: string;
  time?: string;
  type?: 'secondary' | 'primary';
};

const ChatMessage = ({
  actions,
  className = '',
  isReplied = false,
  message,
  modifier = '',
  name,
  replyMessage,
  replyName,
  small = false,
  status,
  tagContent,
  time,
  type,
}: Props) => {
  const css = classNames({
    [`c-chat-message--type-${type}`]: type,
    'c-chat-message--small': small,
    [`c-chat-message--status-${status}`]: status,
    'c-chat-message--replied': isReplied,
  });

  return (
    <div className={`c-chat-message ${modifier} ${css} ${className}`}>
      <div className="c-chat-message__content">
        {replyName && replyMessage && (
          <Quote name={replyName} message={replyMessage} />
        )}

        <div className="c-chat-message__name">
          {name}
          {/* Cast to IconDefinition is needed because fontawesome core has different types for iconDefinition, when all the libraries will have the same version this will not be necessary */}
          {isReplied && (
            <FontAwesomeIcon
              icon={faReply as IconDefinition}
              className="c-chat-message__replied-icon"
            />
          )}

          {time && <time>{time}</time>}

          {tagContent && (
            <Tag modifier="c-tag--full c-tag--small">{tagContent}</Tag>
          )}
        </div>

        <div className="c-chat-message__message">{message}</div>
      </div>

      {actions && <div className="c-chat-message__actions">{actions}</div>}
    </div>
  );
};

ChatMessage.Quote = Quote;

ChatMessage.displayName = 'ChatMessage';

export default ChatMessage;
