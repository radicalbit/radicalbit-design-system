type Props = {
  header?: React.ReactNode;
  editor?: React.ReactNode;
  readOnly?: boolean;
  modifier?: string;
};

const CodeWrapper = ({
  header,
  editor,
  modifier = '',
  readOnly = false,
}: Props) => (
  <div className={`c-code-wrapper ${modifier}`}>
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
