import { Skeleton } from 'antd';
import AntdInput, { TextAreaProps } from 'antd/es/input';
import { TextAreaRef } from 'antd/es/input/TextArea';
import classNames from 'classnames';
import { Ref, forwardRef } from 'react';

const { TextArea: AntdTextArea } = AntdInput;

type Props = TextAreaProps & {
  modifier?: string;
  skeleton?: boolean
}

const TextArea = forwardRef(({
  className = '',
  modifier = '',
  readOnly,
  skeleton,
  value,
  ...rest
}: Props, ref: Ref<TextAreaRef>) => {
  const css = classNames({
    'c-text-area--readonly': readOnly,
  });
  
  const valueOrElse = readOnly ? value || '--' : value;

  if (skeleton) {
    return (
      <Skeleton title={false} paragraph={{ rows: rest.rows, width: '100%' }} active />
    );
  }
  
  return (
    <AntdTextArea
      readOnly={readOnly}
      className={`c-text-area ${className} ${modifier} ${css}`}
      value={valueOrElse}
      ref={ref}
      {...rest}
    />
  );
});
  
TextArea.displayName = 'TextArea';

export default TextArea;
