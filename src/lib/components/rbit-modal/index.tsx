import FontAwesomeIcon from '@Components/font-awesome-icon';
import {
  faUpRightAndDownLeftFromCenter,
  faDownLeftAndUpRightToCenter,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import AntdModal, { ModalProps } from 'antd/es/modal';

type Props = Omit<ModalProps, 'panelRef'> & {
  'aria-label'?: string;
  actions?: React.ReactNode;
  actionsLayout?: 'default' | 'wide';
  background?: 'secondary-04';
  backgroundLevel?: 0 | 1 | 2;
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

function RbitModal({
  'aria-label': ariaLabel,
  actions,
  actionsLayout = 'default',
  background,
  backgroundLevel,
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
}: Props) {
  const [isMaximize, setIsMaximize] = useState(defaultMaximize);

  // Controlled if maximize is not undefined, Uncontroller otherwise
  const cModalMaximized = maximize ?? isMaximize;

  const css = classNames({
    dark,
    'c-rbit-modal--maximize': cModalMaximized,
    'c-rbit-modal--no-padding': noPadding,
    [`c-rbit-modal--background-${String(background)}`]: background,
    [`c-rbit-modal--bg-lv${backgroundLevel}`]: backgroundLevel !== undefined,
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

  const cssActions = classNames({
    dark,
    [`c-rbit-modal__actions--layout-${actionsLayout}`]: actionsLayout,
  });

  // antd does not forward aria-* props to the role="dialog" element, so set the name through panelRef
  const handlePanelRef = useCallback((element: HTMLDivElement | null) => {
    if (!element) {
      return;
    }

    if (ariaLabel) {
      element.setAttribute('aria-label', ariaLabel);
    } else {
      element.removeAttribute('aria-label');
    }
  }, [ariaLabel]);

  return (
    <AntdModal
      footer={null}
      className={`c-rbit-modal ${css} ${className}`}
      width={cModalMaximized ? '100%' : width}
      zIndex={zIndex}
      panelRef={handlePanelRef}
      closeIcon={(
        <FontAwesomeIcon
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

          <div className={`c-rbit-modal__actions ${cssActions}`}>{actions}</div>
        </div>
      </>
    </AntdModal>
  );
}

RbitModal.displayName = 'RbitModal';

export default memo(RbitModal);
