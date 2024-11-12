import React, { ChangeEventHandler, CSSProperties } from 'react';

interface TextAreaProps {
  className?: string;
  style?: CSSProperties;
  label?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}

const TextArea = (props: TextAreaProps) => {
  const { className, style, label, placeholder, onChange, value } = props;
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column' }}>
      {label && <div>{label}</div>}
      <textarea
        placeholder={placeholder}
        style={{ ...style, border: '1px solid black', padding: 4, paddingLeft: 8, paddingRight: 8 }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
