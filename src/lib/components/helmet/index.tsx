import { memo, useEffect } from 'react';

function Helmet({ title }: { title: string }) {
  useEffect(() => {
    window.document.title = title;
  }, [title]);

  return null;
}

export default memo(Helmet);
