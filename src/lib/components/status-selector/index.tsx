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
  disabled?: boolean,
  badge?: React.ReactNode;
  modifier?: string;
  onChange?: (value: Value) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  reverse?: boolean;
  status: Status;
  style?: CSSProperties;
  title: string;
  whiteSpace?: string;
  minWidth?: number;
  withBackground?: string;
  align?: 'center' | 'right';
};

type SelectStatusProps = {
  current: string;
  items?: Array<Item>;
  onChange?: (value: Value) => void;
};

const StatusSelector = ({
  disabled,
  minWidth,
  modifier = '',
  onChange,
  onClick,
  reverse = false,
  badge,
  style = {},
  status: { current, items },
  title,
  whiteSpace = '',
  withBackground,
  align,
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
      className={`m-detail ${modifier} ${clickable} ${css}`}
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
