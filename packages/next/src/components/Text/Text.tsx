import React, { CSSProperties } from 'react';

interface TextProps {
  children?: React.ReactNode;
  style?: CSSProperties;
}

const Text = (props: TextProps) => {
  const { style, children } = props;
  return <div style={{ ...style }}>{children}</div>;
};

export default Text;
