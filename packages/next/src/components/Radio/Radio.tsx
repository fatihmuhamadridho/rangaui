import React from 'react';
import classes from './Radio.module.css';

interface RadioProps {
  label?: string;
  value: string | number;
  name: string;
  checked?: boolean;
  onChange?: (value: string | number) => void;
  className?: string;
  disabled?: boolean;
}

const Radio: React.FC<RadioProps> = ({
  label,
  value,
  name,
  checked = false,
  onChange,
  className = '',
  disabled = false,
}) => {
  const handleChange = () => {
    if (!disabled) {
      onChange?.(value);
    }
  };

  return (
    <label className={`${classes.radioContainer} ${className} ${disabled ? classes.disabled : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={classes.radioInput}
      />
      <span className={classes.radioCircle}></span>
      {label && <span className={classes.radioLabel}>{label}</span>}
    </label>
  );
};

export default Radio;
