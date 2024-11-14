import React, { ChangeEventHandler, CSSProperties, useState } from 'react';

interface TextAreaProps {
  className?: string;
  style?: CSSProperties;
  label?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  defaultValue?: string;
}

const TextArea = (props: TextAreaProps) => {
  const { className, style, label, placeholder, onChange, value, defaultValue } = props;
  const [inputValue, setInputValue] = useState<string>(defaultValue || '');

  const handleTextAreaChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column' }}>
      {label && <div>{label}</div>}
      <textarea
        placeholder={placeholder}
        style={{ ...style, border: '1px solid black', padding: 4, paddingLeft: 8, paddingRight: 8 }}
        value={value || inputValue}
        onChange={handleTextAreaChange}
      />
    </div>
  );
};

export default TextArea;
