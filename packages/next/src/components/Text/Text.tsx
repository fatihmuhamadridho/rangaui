import React, { CSSProperties } from 'react';

interface TextProps {
  children?: React.ReactNode;
  style?: CSSProperties;
  c?: string;
}

const Text = (props: TextProps) => {
  const { style, children, c } = props;
  return <div style={{ color: c, ...style }}>{children}</div>;
};

export default Text;
