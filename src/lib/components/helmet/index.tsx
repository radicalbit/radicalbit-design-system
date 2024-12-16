import { memo, useEffect } from 'react';

const Helmet = ({ title }: { title: string }) => {
  useEffect(() => {
    window.document.title = title;
  }, [title]);

  return <></>;
};

export default memo(Helmet);
