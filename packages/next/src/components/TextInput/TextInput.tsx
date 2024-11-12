import React, {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  useEffect,
  useRef,
  useState,
} from 'react';

interface TextInputProps {
  className?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  defaultValue?: string;
  leftSection?: any;
  rightSection?: any;
}

const TextInput = (props: TextInputProps) => {
  const {
    className,
    label,
    placeholder,
    name,
    type,
    disabled = false,
    autoComplete,
    onFocus,
    onBlur,
    onChange,
    value,
    defaultValue,
    leftSection,
    rightSection,
  } = props;
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rigthSectionRef = useRef<HTMLDivElement>(null);
  const [leftSectionWidth, setLeftSectionWidth] = useState<number>(0);
  const [rightSectionWidth, setRightSectionWidth] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>(defaultValue || '');

  useEffect(() => {
    if (leftSectionRef.current) {
      setLeftSectionWidth(leftSectionRef.current.offsetWidth);
    }
    if (rigthSectionRef.current) {
      setRightSectionWidth(rigthSectionRef.current.offsetWidth);
    }
  }, [leftSection, rightSection]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {label && <div>{label}</div>}
      <div style={{ position: 'relative', width: '100%' }}>
        {leftSection && (
          <div
            ref={leftSectionRef}
            style={{
              paddingBottom: 5,
              paddingLeft: 8,
              paddingRight: 0,
              paddingTop: 5,
              position: 'absolute',
            }}
          >
            {leftSection}
          </div>
        )}
        {rightSection && (
          <div
            ref={rigthSectionRef}
            style={{
              paddingBottom: 5,
              paddingLeft: 0,
              paddingRight: 8,
              paddingTop: 5,
              position: 'absolute',
              right: 0,
            }}
          >
            {rightSection}
          </div>
        )}
        <input
          autoComplete={autoComplete}
          className={className}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          style={{
            backgroundColor: 'black',
            border: '1px solid gray',
            borderRadius: 4,
            padding: 4,
            paddingLeft: leftSection ? leftSectionWidth : 8,
            paddingRight: rightSection ? rightSectionWidth : 8,
            width: '100%',
          }}
          type={type}
          value={value || inputValue}
          onBlur={onBlur}
          onChange={handleInputChange}
          onFocus={onFocus}
        />
      </div>
    </div>
  );
};

export default TextInput;
