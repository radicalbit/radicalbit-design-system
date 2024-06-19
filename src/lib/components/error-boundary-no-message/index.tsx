import { Component } from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

const initialState = { hasError: false };

export default class ErrorBoundaryNoMessage extends Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render(): React.ReactNode | React.ReactElement<'div'> {
    const { children } = this.props;
    const { hasError } = this.state;

    return !hasError && children;
  }
}
