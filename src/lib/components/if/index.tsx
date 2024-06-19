type Props = {
  children: React.ReactNode;
  condition: boolean;
};

// Double exclamation mark is to handle 0
const If = ({ children, condition }: Props) => !!condition && children;

export default If;
