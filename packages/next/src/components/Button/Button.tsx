import React, { CSSProperties, MouseEventHandler, useMemo } from 'react';
import classes from './Button.module.css';
import { BasicProps, StyleProp } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface ButtonProps extends BasicProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
  fullWidth?: boolean;
  fw?: StyleProp<string | number>; // Font weight
  fz?: StyleProp<string | number>; // Font size
}

const Button = (props: ButtonProps) => {
  const {
    children,
    className = '',
    style,
    type,
    onClick,
    m,
    p,
    px,
    py,
    c,
    bg,
    w,
    h,
    fw,
    fz,
    fullWidth = false,
  } = props;

  const buttonStyle = useMemo(() => {
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
      fontWeight: resolveStyleProp(fw),
      fontSize: resolveStyleProp(fz),
      ...(fullWidth && { maxWidth: '100%' }),
      ...style,
    };
  }, [style, fullWidth, m, p, px, py, c, bg, w, h, fw, fz]);

  return (
    <button
      className={`${classes['rangkaui-button']} ${className}`}
      style={buttonStyle}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
