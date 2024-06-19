import AntdCollapse from 'antd/lib/collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import className from 'classnames';
import { CollapseProps } from 'antd/lib/collapse/Collapse';
import Panel from './panel';

type Props = CollapseProps & {
  modifier?: string;
  scroll?: 'horizontal' | 'vertical';
  type?: 'minimal' | 'no-border' | 'transparent' | 'error' | 'secondary-medium' | 'primary-light';
};

const Collapse = ({
  children,
  expandIconPosition = 'left',
  modifier = '',
  scroll,
  type,
  ...other
}: Props) => {
  const css = className({
    [`c-collapse--${scroll}_scroll`]: scroll,
    [`c-collapse--${type}`]: type,
  });

  return (
    <AntdCollapse
      expandIconPosition={expandIconPosition}
      expandIcon={({ isActive }) => isActive
        ? ((<FontAwesomeIcon icon={faChevronDown} />) as React.ReactNode)
        : ((
          <FontAwesomeIcon
            icon={
              expandIconPosition === 'right'
                ? faChevronLeft
                : faChevronRight
            }
          />
        ) as React.ReactNode)}
      className={`c-collapse ${modifier} ${css}`}
      {...other}
    >
      {children}
    </AntdCollapse>
  );
};

Collapse.displayName = 'Collapse';
Collapse.Panel = Panel;

export default Collapse;
