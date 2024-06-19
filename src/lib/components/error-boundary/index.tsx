import Message from '@Components/message';
import { Component } from 'react';

type Props = {
  componentName?: string;
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: unknown): State {
    console.debug('error from error-boundary', error);

    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    const { componentName } = this.props;

    console.debug('info from error-boundary', info);
    console.debug('error from error-boundary', error);

    Message.error(`The component '${componentName || ''}' failed to load.`);
  }

  render(): React.ReactNode | React.ReactElement<'div'> {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <div className="error"></div>;
    }

    return children;
  }
}
