import React, { CSSProperties, useMemo } from 'react';

interface StackProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  gap?: number | string;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const { children, className, style, gap } = props;
  const gapValue = useMemo(() => {
    if (typeof gap === 'number') {
      if (gap === 0) {
        return '0px';
      } else {
        return gap;
      }
    } else {
      return '16px';
    }
  }, [gap]);

  return (
    <div
      className={className}
      ref={ref}
      style={{ ...{ display: 'flex', flexDirection: 'column', gap: gapValue }, ...style }}
    >
      {children}
    </div>
  );
});

Stack.displayName = 'Stack';
export default Stack;
