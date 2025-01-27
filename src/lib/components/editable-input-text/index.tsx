import { Input } from '@Components/input';
import { memo, useEffect, useState } from 'react';

type Props = {
  className?: string;
  autoFocus?: boolean;
  modifier?: string;
  onBlur?: (v: string) => void;
  onPressEnter?: (v: string) => void;
  placeholder?: string;
  title?: string;
};

function EditableInputText({
  autoFocus = false,
  className = '',
  modifier = '',
  onBlur,
  onPressEnter,
  placeholder = 'Untitled*',
  title = '',
}: Props) {
  const [value, setValue] = useState(title);
  const [isOnFocus, setOnFocus] = useState(autoFocus);

  useEffect(() => {
    setValue(title);
  }, [title]);

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e.target.value);
      setOnFocus(false);
    }
  };

  const handleOnPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      return;
    }

    if (onPressEnter) {
      onPressEnter(e.currentTarget.value);
      setOnFocus(false);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleOnFocus = () => {
    setOnFocus(true);
  };

  return (
    <div className={`c-editable-input ${modifier} ${className}`}>
      {isOnFocus ? (
        <Input
          autoFocus
          value={value}
          style={{
            width: `${value.length * 16 + 25}px `,
            fontFamily: 'monospace',
          }}
          onChange={handleOnChange}
          onPressEnter={handleOnPressEnter}
          onBlur={handleOnBlur}
          placeholder={placeholder}
        />
      ) : (
        <div
          role="presentation"
          onClick={handleOnFocus}
          style={{ minWidth: '5rem' }}
        >
          {value}
        </div>
      )}
    </div>
  );
}

EditableInputText.displayName = 'EditableInputText';

export default memo(EditableInputText);
