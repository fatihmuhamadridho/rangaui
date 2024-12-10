import React, { CSSProperties, useMemo, ChangeEventHandler } from 'react';
import classes from './Checkbox.module.css';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface CheckboxProps extends BasicProps {
  label?: string;
  checked?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const {
    label,
    checked = false,
    className = '',
    style,
    onChange,
    disabled = false,
    m,
    p,
    px,
    py,
    c,
    bg,
    w,
    h,
  } = props;

  const checkboxStyle = useMemo(() => {
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
    <label
      className={`${classes['rangkaui-checkbox']} ${className} ${disabled ? classes.disabled : ''}`}
      style={checkboxStyle}
    >
      <input
        type="checkbox"
        className={classes['checkbox-input']}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={classes['checkbox-box']}></span>
      {label && <span className={classes['checkbox-label']}>{label}</span>}
    </label>
  );
};

export default Checkbox;
