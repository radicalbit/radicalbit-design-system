import AntModal, { ModalProps } from 'antd/lib/modal';
import classNames from 'classnames';
import { MouseEventHandler, useState } from 'react';
import FontAwesomeIcon from '@Components/font-awesome-icon';
import {
  faUpRightAndDownLeftFromCenter,
  faDownLeftAndUpRightToCenter,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

type Props = ModalProps & {
  defaultMaximize?: boolean;
  dark?: boolean;
  maximize?: boolean;
  maximizable?: boolean;
  modifier?: string;
  onMaximize?: (p: boolean) => void;
};

function Modal(props: Props): React.ReactElement<typeof AntModal> {
  const {
    children,
    className = '',
    dark,
    defaultMaximize = false,
    maximize,
    maximizable,
    modifier = '',
    onMaximize,
    width,
    ...rest
  } = props;
  const [isMaximize, setIsMaximize] = useState<boolean>(defaultMaximize);

  // Controlled if maximize is not undefined, Uncontroller otherwise
  const cModalMaximized = maximize ?? isMaximize;

  const css = classNames({
    dark,
    'c-modal--maximize': cModalMaximized,
  });

  const toggleIsMaximize: MouseEventHandler<SVGAElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsMaximize((is) => !is);

    if (onMaximize) {
      onMaximize(!cModalMaximized);
    }
  };

  return (
    <AntModal
      className={`c-modal ${className} ${modifier} ${css}`}
      closeIcon={(
        <div className="c-modal__top-right-ico">
          {maximizable && (
            <FontAwesomeIcon
              onClick={toggleIsMaximize}
              className="c-modal__top-right-ico__maximize"
              enableColorMode
              icon={
                cModalMaximized
                  ? faDownLeftAndUpRightToCenter
                  : faUpRightAndDownLeftFromCenter
              }
            />
          )}

          <FontAwesomeIcon
            className="c-modal__top-right-ico__close c-font-awesome-icon--clickable"
            icon={faClose}
            enableColorMode
          />
        </div>
      )}
      width={cModalMaximized ? '100vw' : width}
      {...rest}
    >
      {children}
    </AntModal>
  );
}

Modal.displayName = 'Modal';

export default Modal;
