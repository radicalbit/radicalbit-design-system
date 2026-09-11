import { memo } from 'react';
import ReactMarkdown, { Options } from 'react-markdown';
import gfm from 'remark-gfm';

type OmittedMarkdownOptions = Omit<Options, 'children'>;

type Props = OmittedMarkdownOptions & {
  className?: string;
  modifier?: string;
  value: string;
};

function MarkdownRender({
  className = '', modifier = '', value, ...other
}: Props) {
  return (
    <div className={`c-markdown ${modifier} ${className}`}>
      <ReactMarkdown remarkPlugins={[gfm]} {...other}>
        {value}
      </ReactMarkdown>
    </div>
  );
}

MarkdownRender.displayName = 'MarkdownRender';

export default memo<Props>(MarkdownRender);
