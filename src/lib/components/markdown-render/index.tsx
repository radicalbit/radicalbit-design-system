import { memo } from 'react';
import ReactMarkdown, { Options } from 'react-markdown';
import gfm from 'remark-gfm';

type OmittedMarkdownOptions = Omit<Options, 'children'>

type Props = OmittedMarkdownOptions & {
  modifier?: string;
  value: string;
};

const MarkdownRender = ({
  className = '', modifier = '', value, ...other
}: Props) => (
  <div className={`c-markdown ${modifier} ${className}`}>
    <ReactMarkdown remarkPlugins={[gfm]} {...other}>
      {value}
    </ReactMarkdown>
  </div>
);

MarkdownRender.displayName = 'MarkdownRender';

export default memo<Props>(MarkdownRender);
