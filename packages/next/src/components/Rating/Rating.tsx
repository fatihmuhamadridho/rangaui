import React, { useMemo } from 'react';
import classes from './Rating.module.css';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface RatingProps extends BasicProps {
  value: number; // Current rating value (0 to max)
  max?: number; // Maximum number of stars
  onChange?: (value: number) => void; // Callback when a star is clicked
  className?: string;
  style?: React.CSSProperties;
  readOnly?: boolean; // If true, rating is not clickable
}

const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  onChange,
  className = '',
  style,
  m,
  p,
  w,
  h,
  bg,
  readOnly = false,
}) => {
  const ratingStyle = useMemo(() => {
    return {
      margin: resolveStyleProp(m),
      padding: resolveStyleProp(p),
      width: resolveStyleProp(w),
      height: resolveStyleProp(h),
      backgroundColor: resolveStyleProp(bg),
      ...style,
    };
  }, [style, m, p, w, h, bg]);

  const handleClick = (index: number) => {
    if (!readOnly && onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className={`${classes['rangkaui-rating']} ${className}`} style={ratingStyle}>
      {Array.from({ length: max }, (_, index) => (
        <span
          key={index}
          className={`${classes.star} ${index < value ? classes.active : ''}`}
          onClick={() => handleClick(index)}
          role="button"
          aria-label={`Rate ${index + 1} out of ${max}`}
          tabIndex={readOnly ? -1 : 0}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
