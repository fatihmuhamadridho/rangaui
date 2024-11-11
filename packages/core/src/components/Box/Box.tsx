import React, { CSSProperties } from 'react';

interface BoxProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  p?: number | string | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, className, style, p, onClick } = props;
  return (
    <div className={className} ref={ref} style={{ padding: p, ...style }} onClick={onClick}>
      {children}
    </div>
  );
});

Box.displayName = 'Box';
export { Box };
