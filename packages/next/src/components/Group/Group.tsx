import React, { ReactNode, useMemo } from 'react';
import classes from './Group.module.css';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface GroupProps extends BasicProps {
  children: ReactNode;
  direction?: 'row' | 'column'; // Layout direction: horizontal or vertical
  gap?: number | string; // Gap between items
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch'; // Alignment of items
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'; // Justification of items
  className?: string;
  style?: React.CSSProperties;
  wrap?: boolean; // Wrap items in case of overflow
}

const Group: React.FC<GroupProps> = (props) => {
  const {
    children,
    direction = 'row',
    gap = '8px',
    align = 'center',
    justify = 'flex-start',
    wrap = false,
    className = '',
    style,
    m,
    p,
    w,
    h,
    bg,
  } = props;

  const groupStyle = useMemo<React.CSSProperties>(() => {
    return {
      display: 'flex',
      flexDirection: direction as React.CSSProperties['flexDirection'],
      alignItems: align as React.CSSProperties['alignItems'],
      justifyContent: justify as React.CSSProperties['justifyContent'],
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      margin: resolveStyleProp(m),
      padding: resolveStyleProp(p),
      width: resolveStyleProp(w),
      height: resolveStyleProp(h),
      backgroundColor: resolveStyleProp(bg),
      ...style,
    };
  }, [direction, gap, align, justify, wrap, style, m, p, w, h, bg]);

  return (
    <div className={`${classes['rangkaui-group']} ${className}`} style={groupStyle}>
      {children}
    </div>
  );
};

export default Group;
