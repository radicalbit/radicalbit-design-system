import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const mock = [
  {
    key: 'window',
    content: (
      <>
        <FontAwesomeIcon icon={faSignInAlt} />
        {' '}
        Window
      </>
    ),
    suffix: <div className="c-tools-box__badge" />,
  },
  {
    key: 'join',
    content: (
      <>
        <FontAwesomeIcon icon={faSignInAlt} />
        {' '}
        Join
      </>
    ),
    suffix: (
      <>
        <div className="c-tools-box__badge" />
        <div className="c-tools-box__badge" />
      </>
    ),
  },
  {
    key: 'accumulator',
    content: (
      <>
        <FontAwesomeIcon icon={faSignInAlt} />
        {' '}
        Accumulator
      </>
    ),
    suffix: (
      <>
        <div className="c-tools-box__badge" />
        <div className="c-tools-box__badge" />
        <div className="c-tools-box__badge" />
      </>
    ),
  },
  {
    key: 'quads',
    content: (
      <>
        <FontAwesomeIcon icon={faSignInAlt} />
        {' '}
        Quads
      </>
    ),
    suffix: (
      <>
        <div className="c-tools-box__badge" />
        <div className="c-tools-box__badge" />
        <div className="c-tools-box__badge" />
        <div className="c-tools-box__badge" />
      </>
    ),
  },
];
