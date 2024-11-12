import React, { CSSProperties } from 'react';

interface FlexProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  gap?: number | string;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { children, className, style, direction, gap } = props;
  const gapValue = typeof gap === 'number' ? `${gap}px` : gap;

  return (
    <div
      className={className}
      ref={ref}
      style={{ display: 'flex', flexDirection: direction || 'row', gap: gapValue, ...style }}
    >
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';
export default Flex;
