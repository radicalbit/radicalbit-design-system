import { memo } from 'react';

interface Props {
  className?: string;
  modifier?: string;
  onChange: (value: string) => void;
  options: Option[];
  value: string;
}

interface Option {
  value: string;
  title?: string;
  card: React.ReactNode;
}

function RadioCards({
  className = '',
  modifier = '',
  onChange,
  options,
  value,
}: Props) {
  return <div className={`c-radio-cards ${modifier} ${className}`}>
    {options.map((option: Option, i: number) => {
      const handleOnChange = () => {
        if (onChange) {
          onChange(option.value);
        }
      };

      return (
        <div
          role="presentation"
          key={i}
          className={`c-radio-cards__option ${
            value === option.value ? 'c-radio-cards--active' : ''
          }`}
          onClick={handleOnChange}
        >
          <div className="c-radio-cards__card">{option.card}</div>

          {option.title && (
            <p className="c-radio-cards__title">{option.title}</p>
          )}
        </div>
      );
    })}
  </div>
}

RadioCards.displayName = 'RadioCards';

export default memo<Props>(RadioCards);
