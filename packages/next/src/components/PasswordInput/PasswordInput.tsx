import React, { useState, CSSProperties, ChangeEvent } from 'react';
import { BasicProps } from '../../types/global';
import classes from './PasswordInput.module.css';
import { resolveStyleProp } from '../../helpers';

interface PasswordInputProps extends BasicProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
}

const PasswordInput = ({
  value = '',
  onChange,
  placeholder = 'Enter password',
  className = '',
  style,
  m,
  p,
  px,
  py,
  c,
  bg,
  w,
  h,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div
      className={`${classes.passwordInputContainer} ${className}`}
      style={{
        margin: resolveStyleProp(m),
        padding: resolveStyleProp(p),
        paddingLeft: resolveStyleProp(px),
        paddingRight: resolveStyleProp(px),
        paddingTop: resolveStyleProp(py),
        paddingBottom: resolveStyleProp(py),
        color: resolveStyleProp(c),
        backgroundColor: resolveStyleProp(bg),
        width: resolveStyleProp(w),
        height: resolveStyleProp(h),
        ...style,
      }}
    >
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={classes.passwordInput}
      />
      <button type="button" onClick={handleToggleVisibility} className={classes.toggleButton}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default PasswordInput;
