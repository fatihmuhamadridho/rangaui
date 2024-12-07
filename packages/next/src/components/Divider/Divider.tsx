/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import classes from './Divider.module.css';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface DividerProps extends BasicProps {
  color?: string;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { p, m, color } = props;
  return (
    <div
      className={classes['rangkaui-divider']}
      style={{ padding: resolveStyleProp(p), margin: resolveStyleProp(m), borderColor: color }}
    ></div>
  );
});

Divider.displayName = 'Divider';
export default Divider;
