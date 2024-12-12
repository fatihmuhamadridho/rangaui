import React, { CSSProperties, useMemo } from 'react';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface FlexProps extends BasicProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  gap?: number | string;
  items?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    children,
    className = '',
    style,
    direction = 'row',
    gap,
    items,
    justify,
    m,
    p,
    px,
    py,
    w,
    h,
    bg,
  } = props;

  const gapValue = typeof gap === 'number' ? `${gap}px` : gap;

  const flexStyle = useMemo(() => {
    return {
      margin: resolveStyleProp(m),
      padding: resolveStyleProp(p),
      paddingLeft: resolveStyleProp(px),
      paddingRight: resolveStyleProp(px),
      paddingTop: resolveStyleProp(py),
      paddingBottom: resolveStyleProp(py),
      width: resolveStyleProp(w),
      height: resolveStyleProp(h),
      backgroundColor: resolveStyleProp(bg),
      display: 'flex',
      flexDirection: direction,
      gap: gapValue,
      alignItems: items,
      justifyContent: justify,
      ...style,
    };
  }, [style, direction, gapValue, m, p, px, py, w, h, bg, items, justify]);

  return (
    <div className={className} ref={ref} style={flexStyle}>
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';
export default Flex;
