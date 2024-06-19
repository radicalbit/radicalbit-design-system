import Empty from 'antd/lib/empty';
import Select from 'antd/lib/select';

import { Option } from '@Components/select';
import Icon from '@Components/icon';
import { DataTable } from '@Components/data-table';
import Button from '@Components/button';
import { Component } from 'react';

export type Content = {
  name: string;
  description: string | React.ReactNode;
};

export type Props = {
  title: string;
  content: Array<Content>;
  type: 'list' | 'compact';
  action?: React.ReactNode;
  onAdd?: () => void;
  onClose?: () => void;
  onChange?: (value: string) => void;
  onAction?: (v?: string) => void;
};

type State = {
  currentIndex: number;
};

const initialState = {
  currentIndex: 0,
};

export default class ListBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  getTypeOrElse = (): string => {
    const { type } = this.props;
    return type || 'compact';
  };

  isCompact = (): boolean => this.getTypeOrElse() === 'compact';

  handleChange = (
    value: string,
    option: { key: number } | { key: number }[]
  ) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
    // not sure if this is correct, i assumed that key was a singular key, so i selected the first option
    if (Array.isArray(option)) {
      this.setState({ currentIndex: option[0].key });
      return;
    }
    this.setState({ currentIndex: option.key });
  };

  compact = (content: Array<Content>): React.ReactElement => {
    const { currentIndex } = this.state;

    if (!content || !content.length) {
      return (
        <div className="rdb-list-box-content-missing">Content missing</div>
      );
    }

    const defaultValue = content[0].name;
    const { description } = content[currentIndex];

    return (
      <>
        <Select defaultValue={defaultValue} onChange={this.handleChange}>
          {content.map(
            ({ name }: { name: string }, index: number): React.ReactElement => (
              <Option key={index} value={name}>
                {name}
              </Option>
            )
          )}
        </Select>

        <div className="rdb-list-box-content-compact-description">
          {description}
        </div>
      </>
    );
  };

  list = (content: Array<Content>): React.ReactElement => {
    if (!content || !content.length) {
      return (
        <div className="rdb-list-box-content-missing">
          <Empty />
        </div>
      );
    }

    const columns = Object.keys(content[0]).map(
      (key: string): { dataIndex: string } => ({ dataIndex: key })
    );

    return (
      <DataTable
        dataSource={content.map((ds: Content, index: number) => ({
          ...ds,
          key: index,
        }))}
        columns={columns}
        pagination={false}
        showHeader={false}
      />
    );
  };

  render(): React.ReactElement {
    const {
      title, onAdd, content, onClose,
    } = this.props;
    return (
      <div className="rdb-list-box">
        <div className="rdb-list-box-title">
          {title}
          {' '}
          {onClose && (
            <Icon
              className="rdb-list-box-title-icon"
              type="close"
              onClick={onClose}
            />
          )}
        </div>

        {this.isCompact() ? (
          <div className="rdb-list-box-content-compact">
            {this.compact(content)}
          </div>
        ) : (
          <div className="rdb-list-box-content-list">{this.list(content)}</div>
        )}

        {onAdd && (
          <Button onClick={onAdd} size="small">
            Add
            {' '}
            <strong>{title}</strong>
          </Button>
        )}
      </div>
    );
  }
}
