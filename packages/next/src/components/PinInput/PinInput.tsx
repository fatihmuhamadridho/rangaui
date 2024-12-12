import React, { CSSProperties, useMemo, useState } from 'react';
import classes from './PinInput.module.css';
import { BasicProps } from '../../types/global';
import { resolveStyleProp } from '../../helpers';

interface PinInputProps extends BasicProps {
  length?: number; // Jumlah input untuk PIN
  onChangePin?: (pin: string) => void; // Callback ketika PIN berubah
  className?: string;
  style?: CSSProperties;
}

const PinInput = (props: PinInputProps) => {
  const { length = 4, onChangePin, className = '', style, m, p, px, py, c, bg, w, h } = props;

  const [values, setValues] = useState<string[]>(Array(length).fill(''));

  const handleChange = (value: string, index: number) => {
    if (value.length > 1 || isNaN(Number(value))) return; // Hanya menerima angka
    const updatedValues = [...values];
    updatedValues[index] = value;
    setValues(updatedValues);

    // Gabungkan nilai-nilai input sebagai PIN
    if (onChangePin) onChangePin(updatedValues.join(''));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace' && !values[index]) {
      // Pindah ke input sebelumnya saat Backspace ditekan
      const prevInput = document.getElementById(`pin-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const containerStyle = useMemo(() => {
    return {
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
    };
  }, [style, m, p, px, py, c, bg, w, h]);

  return (
    <div
      className={`${classes['rangkaui-pin-input-container']} ${className}`}
      style={containerStyle}
    >
      {values.map((value, index) => (
        <input
          key={index}
          id={`pin-input-${index}`}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={handleFocus}
          className={classes['rangkaui-pin-input']}
        />
      ))}
    </div>
  );
};

export default PinInput;
