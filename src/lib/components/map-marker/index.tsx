import classNames from 'classnames';
import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode;
  classname?: string;
  height?: string | null;
  modifier?: string;
  type?: 'cluster';
  width?: string | null;
};

const MapMarker = ({
  children,
  classname = '',
  height = null,
  modifier = '',
  type,
  width = null,
}: Props) => {
  const css = classNames({
    [`c-map-marker--type-${type}`]: type,
  });

  const style = [
    { name: 'width', value: width },
    { name: 'height', value: height },
  ].reduce(
    (acc, { name, value }) => (value ? { ...acc, [name]: value } : { ...acc }),
    {}
  );

  return (
    <div style={style} className={`c-map-marker ${modifier} ${css} ${classNames}`}>
      <div className="c-map-marker__content">{children}</div>
    </div>
  );
};
export default MapMarker;
