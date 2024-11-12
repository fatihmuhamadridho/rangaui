/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';

interface DividerProps {}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {} = props;
  return <div style={{ border: '0.1px solid black' }}></div>;
});

Divider.displayName = 'Divider';
export default Divider;
