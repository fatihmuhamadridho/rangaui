import React, { CSSProperties } from 'react';
import classes from './Center.module.css';

interface CenterProps {
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Center: React.FC<CenterProps> = ({ children, style, className = '' }) => {
  return (
    <div className={`${classes.center} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Center;
