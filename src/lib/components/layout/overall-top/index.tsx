import classNames from 'classnames';
import { ReactNode } from 'react';

export type OverallTopProps = {
  content?: ReactNode;
  contentDark?: boolean;
};

function OverallTop({ content, contentDark }: OverallTopProps) {
  const css = classNames({ dark: contentDark });

  return (
    <>{content && <div className={`cona-overall-top ${css}`}>{content}</div>}</>
  );
}

export default OverallTop;
