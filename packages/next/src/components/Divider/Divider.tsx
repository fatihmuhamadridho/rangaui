/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import classes from './Divider.module.css';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface DividerProps extends BasicProps {}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { p, m } = props;
  return (
    <div
      className={classes['rangkaui-divider']}
      style={{ padding: resolveStyleProp(p), margin: resolveStyleProp(m) }}
    ></div>
  );
});

Divider.displayName = 'Divider';
export default Divider;
