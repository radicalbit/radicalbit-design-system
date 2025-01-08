import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import ReactTour, { ReactourProps } from 'reactour';

type Props = ReactourProps & {
  modifier?: string;
  mode?: 'light' | 'dark';
};

const Tour = ({
  className = '',
  modifier = '',
  mode = 'light',
  ...other
}: Props) => {
  const css = classNames({
    dark: mode === 'dark',
  });

  return (
    <ReactTour
      rounded={16}
      className={`c-tour ${css} ${modifier} ${className}`}
      showNumber={false}
      accentColor="var(--coo-dark)"
      nextButton={(
        <FontAwesomeIcon
          icon={faChevronRight}
          className="c-tour__right-arrow"
        />
      )}
      prevButton={
        <FontAwesomeIcon icon={faChevronLeft} className="c-tour__left-arrow" />
      }
      {...other}
    />
  );
};

Tour.displayName = 'Tour';

export default Tour;
