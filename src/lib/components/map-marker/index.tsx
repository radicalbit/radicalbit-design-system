import classNames from 'classnames';
import { ReactNode } from 'react';

export type Props = {
  modifier?: string;
  children?: ReactNode;
  type?: 'cluster';
  height?: string | null;
  width?: string | null;
};

const MapMarker = ({
  children,
  modifier = '',
  type,
  height = null,
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
    <div style={style} className={`c-map-marker ${modifier} ${css}`}>
      <div className="c-map-marker__content">{children}</div>
    </div>
  );
};
export default MapMarker;
