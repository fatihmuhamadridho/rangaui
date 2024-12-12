import React, { CSSProperties, useMemo } from 'react';
import { BasicProps, StyleProp } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface TextProps extends BasicProps {
  children?: React.ReactNode;
  style?: CSSProperties;
  c?: string; // Warna teks
  fw?: StyleProp<string | number>; // Font weight
  fz?: StyleProp<string | number>; // Font size
  className?: string; // Class tambahan
}

const Text = (props: TextProps) => {
  const { children, style, c, fw, fz, m, p, px, py, w, h, className = '' } = props;

  const textStyle = useMemo(() => {
    return {
      margin: resolveStyleProp(m),
      padding: resolveStyleProp(p),
      paddingLeft: resolveStyleProp(px),
      paddingRight: resolveStyleProp(px),
      paddingTop: resolveStyleProp(py),
      paddingBottom: resolveStyleProp(py),
      color: resolveStyleProp(c),
      fontWeight: resolveStyleProp(fw),
      fontSize: resolveStyleProp(fz),
      width: resolveStyleProp(w),
      height: resolveStyleProp(h),
      ...style,
    };
  }, [style, m, p, px, py, c, fw, fz, w, h]);

  return (
    <div className={className} style={textStyle}>
      {children}
    </div>
  );
};

export default Text;
