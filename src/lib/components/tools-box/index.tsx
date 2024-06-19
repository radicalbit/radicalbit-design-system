import { Input } from '@Components/input';
import { ChangeEvent, ReactNode, memo } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputProps } from 'antd';

type Body = {
  key: string;
  content: ReactNode;
  suffix: ReactNode;
};

type Props = InputProps & {
  top?: ReactNode | ReactNode[];
  header?: ReactNode | ReactNode[];
  body?: Body[];
  footer?: ReactNode;
  modifier?: string;
  onSearch?: (v: ChangeEvent) => void;
};

const ToolsBox = ({
  body,
  footer,
  header,
  modifier = '',
  onSearch,
  top,
}: Props) => (
  <div className={`c-tools-box ${modifier}`}>
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
