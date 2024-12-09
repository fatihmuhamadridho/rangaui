import React, { CSSProperties } from 'react';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface BoxProps extends BasicProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  p?: number | string | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  c?: string;
  onClick?: () => void;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, className, style, p, c, onClick, m, w, h, bg } = props;

  const computedStyle: CSSProperties = {
    margin: resolveStyleProp(m),
    padding: p,
    color: c,
    backgroundColor: resolveStyleProp(bg),
    width: resolveStyleProp(w),
    height: resolveStyleProp(h),
    ...style,
  };

  return (
    <div className={className} ref={ref} style={computedStyle} onClick={onClick}>
      {children}
    </div>
  );
});

Box.displayName = 'Box';
export default Box;
