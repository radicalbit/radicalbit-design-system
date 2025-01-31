import classNames from 'classnames';
import Select, { Option } from '@Components/select';
import { CSSProperties, memo } from 'react';

export type Value = string | number | boolean;

type Item = {
  text: string;
  value: Value;
};

export type Status = {
  current: string;
  items?: Array<Item>;
};

type Props = {
  align?: 'center' | 'right';
  badge?: React.ReactNode;
  className?: string;
  disabled?: boolean,
  minWidth?: number;
  modifier?: string;
  onChange?: (value: Value) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  reverse?: boolean;
  status: Status;
  style?: CSSProperties;
  title: string;
  whiteSpace?: string;
  withBackground?: string;
};

type SelectStatusProps = {
  current: string;
  items?: Array<Item>;
  onChange?: (value: Value) => void;
};

const StatusSelector = ({
  align,
  badge,
  className = '',
  disabled,
  minWidth,
  modifier = '',
  onChange,
  onClick,
  reverse = false,
  status: { current, items },
  style = {},
  title,
  whiteSpace = '',
  withBackground,
  ...others
}: Props) => {
  const hasOption = items && items.length;

  const css = classNames({
    'm-detail--background': withBackground,
    'm-detail--reverse': reverse,
    [`m-detail--${whiteSpace}`]: whiteSpace,
    [`m-detail--align-${align}`]: align,
    'm-detail--disabled': disabled,
  });

  const cssLabel = classNames({
    'm-detail__label--with-badge': badge,
  });

  const clickable = onClick ? 'm-detail--clickable' : '';
  const cssStyle = minWidth
    ? { minWidth: `${minWidth}px`, '--color-content': withBackground, ...style }
    : undefined;

  return (
    <div
      role="presentation"
      className={`m-detail ${modifier} ${clickable} ${css} ${className}`}
      onClick={onClick}
      style={cssStyle}
      {...others}
    >
      <span className="m-detail__label">{title}</span>

      <div className="m-detail__content">
        <div className={`m-detail__label ${cssLabel}`}>
          {hasOption ? (
            <SelectStatus current={current} items={items} onChange={onChange} />
          ) : (
            <h3>{current ?? '--'}</h3>
          )}
        </div>

        <div className="m-detail__badge">{badge}</div>
      </div>
    </div>
  );
};

const SelectStatus = ({ current, items, onChange }: SelectStatusProps) => current ? (
  <Select defaultValue={current} key={current} onChange={onChange}>
    {items
      ? items.map((item: Item, index: number) => (
        <Option value={item.value} key={index}>
          {item.text}
        </Option>
      ))
      : []}
  </Select>
) : (
  <></>
);

StatusSelector.displayName = 'StatusSelector';

export default memo<Props>(StatusSelector);
