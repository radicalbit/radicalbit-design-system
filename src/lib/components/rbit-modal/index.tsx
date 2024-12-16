import FontAwesomeIcon from '@Components/font-awesome-icon';
import {
  faUpRightAndDownLeftFromCenter,
  faDownLeftAndUpRightToCenter,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { memo, useState } from 'react';
import AntdModal, { ModalProps } from 'antd/lib/modal';

type Props = ModalProps & {
  actions?: React.ReactNode;
  background?: 'secondary-04';
  dark?: boolean;
  defaultMaximize?: boolean;
  header?: React.ReactNode;
  headerType?: 'bold';
  icoActions?: React.ReactNode;
  maximizable?: boolean;
  maximize?: boolean;
  modifier?: string;
  noPadding?: boolean;
  onMaximize?: (p: boolean) => void;
};

const RbitModal = ({
  actions,
  background,
  children,
  className = '',
  dark,
  defaultMaximize = false,
  header = false,
  headerType = 'bold',
  icoActions,
  maximizable,
  maximize,
  modifier = '',
  noPadding = false,
  onMaximize,
  width,
  zIndex = 1000,
  ...others
}: Props) => {
  const [isMaximize, setIsMaximize] = useState(defaultMaximize);

  // Controlled if maximize is not undefined, Uncontroller otherwise
  const cModalMaximized = maximize ?? isMaximize;

  const css = classNames({
    dark,
    'c-rbit-modal--maximize': cModalMaximized,
    'c-rbit-modal--no-padding': noPadding,
    [`c-rbit-modal--background-${String(background)}`]: background,
  });

  const cssHeader = classNames({
    dark,
    [`c-rbit-modal__header--type-${headerType}`]: headerType,
  });

  const toggleIsMaximize = () => {
    setIsMaximize((is) => !is);

    if (onMaximize) {
      onMaximize(!cModalMaximized);
    }
  };

  return (
    <AntdModal
      footer={null}
      className={`c-rbit-modal ${css} ${className}`}
      width={cModalMaximized ? '100vw' : width}
      zIndex={zIndex}
      closeIcon={(
        <FontAwesomeIcon
          className="c-font-awesome-icon--clickable"
          icon={faClose}
          enableColorMode
        />
      )}
      {...others}
    >
      <>
        {(icoActions || maximizable) && (
          <div className="c-rbit-modal__top-right-ico">
            {icoActions && (
              <div className="c-rbit-modal__top-right-ico__actions">
                {icoActions}
              </div>
            )}

            {maximizable && (
              <div className="c-rbit-modal__top-right-ico__maximize">
                <FontAwesomeIcon
                  enableColorMode
                  icon={
                    cModalMaximized
                      ? faDownLeftAndUpRightToCenter
                      : faUpRightAndDownLeftFromCenter
                  }
                  onClick={toggleIsMaximize}
                />
              </div>
            )}
          </div>
        )}

        <div className={`c-rbit-modal__content ${modifier}`}>
          <div className={`c-rbit-modal__header ${cssHeader}`}>{header}</div>

          <div className="c-rbit-modal__body">{children}</div>

          <div className="c-rbit-modal__actions">{actions}</div>
        </div>
      </>
    </AntdModal>
  );
};

RbitModal.displayName = 'RbitModal';

export default memo(RbitModal);
