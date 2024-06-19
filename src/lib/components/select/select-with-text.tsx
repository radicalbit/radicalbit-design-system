import Button from '@Components/button';
import { Input } from '@Components/input';
import Select, { Option, Props as SelectProps } from '@Components/select';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import React, { useState, useRef } from 'react';

type Props = SelectProps & {
  items: { label: string; value: string }[];
  notAllowEmptyText?: boolean;
  notAllowDuplication?: boolean;
  onSelectChange: (v: string) => void;
  onTextChange: (v: string) => void;
  reverse?: boolean;
  textPlaceholder?: string;
  caseSensitive?: boolean;
  width?: number;
};

function SelectWithText({
  items,
  notAllowEmptyText,
  notAllowDuplication,
  onSelectChange,
  onTextChange,
  reverse,
  textPlaceholder,
  caseSensitive = false,
  value = undefined,
  defaultActiveFirstOption = false,
  width,
  ...others
}: Props) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [inputTextValue, setInputTextValue] = useState('');
  const [open, setOpen] = useState(false);
  const [visibilityChangeEnabled, setVisibilityChangeEnabled] = useState(true);

  const isDuplicated = items.some(({ label }) => caseSensitive
    ? label === inputTextValue
    : label.toLowerCase() === inputTextValue.toLowerCase());

  const saveDisabled = (notAllowEmptyText && isEmpty(inputTextValue))
    || (notAllowDuplication && isDuplicated);

  const handleOnVisibleChange = (isOpen: boolean) => {
    if (visibilityChangeEnabled) {
      setOpen(isOpen);
    }
  };

  const handleOnPressEnterInputText = () => {
    if (saveDisabled) {
      return;
    }

    onTextChange(inputTextValue);
    setVisibilityChangeEnabled(true);
    setOpen(false);
  };

  const handleSelectOnChange = (v: string) => {
    setInputTextValue('');
    onSelectChange(v);
  };
  const handleOnChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => setInputTextValue(e.target.value);

  const handleOnMouseEnter = () => setVisibilityChangeEnabled(false);
  const handleOnMouseLeave = () => setVisibilityChangeEnabled(true);
  const handleInputClick = () => {
    if (menuRef.current) {
      const elements = Array.from(menuRef.current.getElementsByTagName('li'));
      elements.forEach((e) => {
        e.classList.remove('ant-select-dropdown-menu-item-active');
        e.classList.remove('ant-select-dropdown-menu-item-selected');
      });
    }
  };

  const dropdownCss = classNames({
    'c-select-with-text__dropdown--reverse': reverse,
  });

  return (
    <Select
      className="c-select-with-text"
      dropdownRender={(menu) => (
        <div className={`c-select-with-text__dropdown ${dropdownCss}`}>
          <div
            className="c-select-with-text__custom"
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <Input
              allowClear
              onChange={handleOnChangeInputText}
              onPressEnter={handleOnPressEnterInputText}
              placeholder={textPlaceholder}
              value={inputTextValue}
              onClick={handleInputClick}
            />

            <Button
              disabled={saveDisabled}
              onClick={handleOnPressEnterInputText}
              shape="circle"
              type="default"
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>

          <div className="c-select-with-text__menu" ref={menuRef}>
            {menu}
          </div>
        </div>
      )}
      onChange={handleSelectOnChange}
      onDropdownVisibleChange={handleOnVisibleChange}
      open={open}
      style={{ width }}
      value={value}
      defaultActiveFirstOption={defaultActiveFirstOption}
      {...others}
    >
      {items.map(({ value: v, label }) => (
        <Option key={v} value={v}>
          {label}
        </Option>
      ))}
    </Select>
  );
}

export default React.memo(SelectWithText);
