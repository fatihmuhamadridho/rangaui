import React, { CSSProperties, MouseEventHandler, useMemo } from 'react';
import classes from './Chip.module.css';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface ChipProps extends BasicProps {
  label: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
  deletable?: boolean;
}

const Chip: React.FC<ChipProps> = (props) => {
  const {
    label,
    onClick,
    onDelete,
    className = '',
    style,
    m,
    p,
    px,
    py,
    c,
    bg,
    w,
    h,
    deletable = false,
  } = props;

  const chipStyle = useMemo(() => {
    return {
      margin: resolveStyleProp(m),
      padding: resolveStyleProp(p),
      paddingLeft: resolveStyleProp(px),
      paddingRight: resolveStyleProp(px),
      paddingTop: resolveStyleProp(py),
      paddingBottom: resolveStyleProp(py),
      color: resolveStyleProp(c),
      backgroundColor: resolveStyleProp(bg),
      width: resolveStyleProp(w),
      height: resolveStyleProp(h),
      ...style,
    };
  }, [style, m, p, px, py, c, bg, w, h]);

  return (
    <div className={`${classes['rangkaui-chip']} ${className}`} style={chipStyle} onClick={onClick}>
      <span className={classes['chip-label']}>{label}</span>
      {deletable && (
        <button
          className={classes['chip-delete']}
          onClick={(e) => {
            e.stopPropagation();
            onDelete?.(e);
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Chip;
