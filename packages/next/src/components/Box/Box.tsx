import React, { CSSProperties } from 'react';
import { BasicProps, StyleProp } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface BoxProps extends BasicProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  p?: number | string | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  px?: number | string;
  py?: number | string;
  m?: number | string;
  mx?: number | string;
  my?: number | string;
  w?: number | string;
  h?: number | string;
  bg?: string;
  c?: string;
  fw?: StyleProp<string | number>;
  fz?: StyleProp<string | number>;
  onClick?: () => void;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, className, style, p, px, py, m, mx, my, w, h, bg, c, fw, fz, onClick } = props;

  const computedStyle: CSSProperties = {
    margin: resolveStyleProp(m),
    marginLeft: resolveStyleProp(mx),
    marginRight: resolveStyleProp(mx),
    marginTop: resolveStyleProp(my),
    marginBottom: resolveStyleProp(my),
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
    ...style,
  };

  return (
    <div className={className} ref={ref} style={computedStyle} onClick={onClick}>
      {children}
    </div>
  );
});

Box.displayName = 'Box';
export default Box;
