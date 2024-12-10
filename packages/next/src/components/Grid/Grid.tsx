import React, { CSSProperties, ReactNode } from 'react';
import classes from './Grid.module.css';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface GridProps extends BasicProps {
  children: ReactNode;
  columns?: number | string; // Number of columns or custom CSS grid-template-columns value
  gap?: number | string; // Gap between grid items
  className?: string;
  style?: CSSProperties;
}

const Grid: React.FC<GridProps> = (props) => {
  const {
    children,
    columns = 2, // Default to 2 columns
    gap = '16px',
    className = '',
    style,
    m,
    p,
    w,
    h,
    bg,
  } = props;

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
    gap,
    margin: resolveStyleProp(m),
    padding: resolveStyleProp(p),
    width: resolveStyleProp(w),
    height: resolveStyleProp(h),
    backgroundColor: resolveStyleProp(bg),
    ...style,
  };

  return (
    <div className={`${classes['rangkaui-grid']} ${className}`} style={gridStyle}>
      {children}
    </div>
  );
};

export default Grid;
