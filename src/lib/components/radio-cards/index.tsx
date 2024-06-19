import { memo } from 'react';

type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  /** Additional css classes */
  modifier?: string;
};

type Option = {
  value: string;
  title?: string;
  card: React.ReactNode;
};

const RadioCards = ({
  options, value, onChange, modifier = '',
}: Props) => (
  <div className={`c-radio-cards ${modifier}`}>
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
);

RadioCards.displayName = 'RadioCards';

export default memo<Props>(RadioCards);
