import AntdCollapse from 'antd/lib/collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { CollapseProps } from 'antd/lib/collapse/Collapse';
import Panel from './panel';

type Props = CollapseProps & {
  dark?:boolean
  modifier?: string;
  scroll?: 'horizontal' | 'vertical';
  type?: 'minimal' | 'no-border' | 'transparent' | 'error' | 'secondary-medium' | 'primary-light';
};

const Collapse = ({
  children,
  className = '',
  dark = false,
  expandIconPosition = 'left',
  modifier = '',
  scroll,
  type,
  ...other
}: Props) => {
  const css = classNames({
    [`c-collapse--${scroll}_scroll`]: scroll,
    [`c-collapse--${type}`]: type,
    dark,
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
      className={`c-collapse ${modifier} ${css} ${className}`}
      {...other}
    >
      {children}
    </AntdCollapse>
  );
};

Collapse.displayName = 'Collapse';
Collapse.Panel = Panel;

export default Collapse;
