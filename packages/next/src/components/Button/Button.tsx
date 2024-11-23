import React, { CSSProperties, MouseEventHandler, useMemo } from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
  p?: number;
  px?: number;
  py?: number;
  c?: string;
  fullWidth?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    className = '',
    style,
    type,
    onClick,
    p = null,
    px = null,
    py = null,
    c = null,
    fullWidth = false,
  } = props;

  const buttonStyle = useMemo(() => {
    let result: CSSProperties = {};
    let strictResult: CSSProperties = {};

    if (fullWidth) result = { ...result, maxWidth: '100%' };
    if (p) strictResult = { ...strictResult, padding: p };
    if (px) strictResult = { ...strictResult, paddingLeft: px, paddingRight: px };
    if (py) strictResult = { ...strictResult, paddingBottom: py, paddingTop: py };
    if (c) strictResult = { ...strictResult, color: c };

    return { ...result, ...style, ...strictResult };
  }, [fullWidth, style, p, px, py, c]);

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
