import React, { CSSProperties, MouseEventHandler, useMemo } from 'react';
import classes from './Button.module.css';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface ButtonProps extends BasicProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
  fullWidth?: boolean;
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
    fullWidth = false,
  } = props;

  const buttonStyle = useMemo(() => {
    return {
      ...style,
      ...(fullWidth && { maxWidth: '100%' }),
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
    };
  }, [style, fullWidth, m, p, px, py, c, bg, w, h]);

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
