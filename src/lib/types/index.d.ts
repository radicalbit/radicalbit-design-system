declare module '*.jpg';
declare module '*.png';

declare module '*.svg' {
    import { FC, SVGProps } from 'react';
   
    const content: FC<SVGProps<SVGSVGElement>>;
    export default content;
  }

declare module '*.svg?url' {
    const content: string;
    export default content;
}
