/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': {
        icon?: string;
        width?: string | number;
        height?: string | number;
        inline?: boolean;
        flip?: string;
        rotate?: string | number;
        color?: string;
        className?: string;
        class?: string;
        style?: React.CSSProperties;
        onClick?: (e: React.MouseEvent<HTMLElement>) => void;
        onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
        onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
        [key: string]: any;
      };
    }
  }
}
