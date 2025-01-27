import { Input } from '@Components/input';
import { ChangeEvent, ReactNode, memo } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputProps } from 'antd';

type Body = {
  content: ReactNode;
  key: string;
  suffix: ReactNode;
};

type Props = InputProps & {
  body?: Body[];
  footer?: ReactNode;
  header?: ReactNode | ReactNode[];
  modifier?: string;
  onSearch?: (v: ChangeEvent) => void;
  top?: ReactNode | ReactNode[];
};

const ToolsBox = ({
  className = '',
  body,
  footer,
  header,
  modifier = '',
  onSearch,
  top,
}: Props) => (
  <div className={`c-tools-box ${modifier} ${className}`}>
    {top && <div className="c-tools-box__top dragger-box">{top}</div>}

    {onSearch && (
      <div className="c-tools-box__search">
        <Input
          onChange={onSearch}
          suffix={<FontAwesomeIcon icon={faSearch} />}
          placeholder="Search"
        />
      </div>
    )}

    {header && (
      <div className="c-tools-box__header operators-box">{header}</div>
    )}

    {body && (
      <div className="c-tools-box__body">
        {body.map((el) => (
          <div className="c-tools-box__item" key={el.key}>
            <div className="c-tools-box__content">{el.content}</div>
            <div className="c-tools-box__suffix">{el.suffix}</div>
          </div>
        ))}
      </div>
    )}

    {footer && <div className="c-tools-box__footer">{footer}</div>}
  </div>
);

ToolsBox.displayName = 'ToolsBox';

export default memo(ToolsBox);
