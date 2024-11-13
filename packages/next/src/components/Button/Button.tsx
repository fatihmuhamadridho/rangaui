import React, { CSSProperties, MouseEventHandler, useMemo } from 'react';

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

const defaultStyle: CSSProperties = {
  borderRadius: 4,
  maxWidth: 'min-content',
  paddingBottom: 4,
  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 4,
  borderColor: 'black',
  borderWidth: 1,
};

const Button = (props: ButtonProps) => {
  const {
    children,
    className,
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

    return { ...defaultStyle, ...result, ...style, ...strictResult };
  }, [fullWidth, style, p, px, py, c]);

  return (
    <button className={className} style={buttonStyle} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
