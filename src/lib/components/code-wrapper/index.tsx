type Props = {
  className?: string;
  editor?: React.ReactNode;
  header?: React.ReactNode;
  modifier?: string;
  readOnly?: boolean;
};

const CodeWrapper = ({
  className = '',
  editor,
  header,
  modifier = '',
  readOnly = false,
}: Props) => (
  <div className={`c-code-wrapper ${modifier} ${className}`}>
    {header && <div className="c-code-wrapper__header">{header}</div>}

    {editor && (
      <div className={`c-code-wrapper__editor ${readOnly && 'readonly'}`}>
        {editor}
      </div>
    )}
  </div>
);

CodeWrapper.displayName = 'CodeWrapper';

export default CodeWrapper;
