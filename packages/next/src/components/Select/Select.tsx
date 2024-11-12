/* eslint-disable no-prototype-builtins */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Select.module.css';

interface SelectProps {
  label?: string;
  placeholder?: string;
  data?: string[] | Array<{ label: string; value: string }>;
  onChange?: (...props: any) => any;
  value?: string;
}

const Select = (props: SelectProps) => {
  const { label, placeholder, data, onChange, value } = props;
  const defaultTop = 24 * 2 + 4 + 4 + 1 + 1;
  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string>('');
  const selectRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        handleHide();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (value && result === '') {
      setResult(value);
    }
  }, [value, result]);

  const handleShow = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };

  const renderData: Array<{ label: string; value: string }> = useMemo(() => {
    if (!data) {
      return [];
    }

    const uniqueValues = new Set<string>();
    const isDataString = data.every((item) => typeof item === 'string');
    const isDataObject = data.every((item) => typeof item === 'object' && item !== null);

    const hasMixedTypes = data.some(
      (item) =>
        typeof item === 'object' &&
        item !== null &&
        !(item.hasOwnProperty('label') && item.hasOwnProperty('value'))
    );

    if (hasMixedTypes || (!isDataString && !isDataObject)) {
      setError('Error: Data contains invalid types or mixed types.');
      return [];
    }

    const processData = (items: Array<{ label: string; value: string }>) => {
      const hasDuplicate = items.some(({ value }) => {
        if (uniqueValues.has(value)) {
          return true;
        } else {
          uniqueValues.add(value);
          return false;
        }
      });

      if (hasDuplicate) {
        setError('Error: Duplicate values found in data.');
        return [];
      } else {
        setError(null);
        return items;
      }
    };

    if (isDataString && !isDataObject) {
      return processData(data.map((item) => ({ label: item, value: item })));
    } else if (isDataObject) {
      return processData(data as Array<{ label: string; value: string }>);
    } else {
      return [];
    }
  }, [data]);

  const renderValue = useMemo(() => {
    const findData = renderData?.find((item) => item.value === result);
    return findData?.label;
  }, [result, renderData]);

  const hanadleSelectItem = (event: string) => {
    setShow(false);
    if (event === result) setResult('');
    if (event !== result) setResult(event);
    if (onChange) {
      if (event === result) onChange('');
      if (event !== result) onChange(event);
    }
  };

  return (
    <div ref={selectRef} style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>{label}</div>
        <input
          placeholder={placeholder}
          value={renderValue}
          onChange={() => {}}
          onFocus={handleShow}
        />
      </div>
      {show && (
        <div
          style={{
            background: 'black',
            border: '1px solid white',
            borderRadius: 4,
            padding: 4,
            position: 'absolute',
            top: defaultTop + 10,
            width: '100%',
            zIndex: 300,
          }}
        >
          {error ? (
            <div style={{ color: 'red', padding: 8 }}>{error}</div>
          ) : renderData.length > 0 ? (
            renderData?.map((item) => (
              <React.Fragment key={item.value}>
                <div
                  className={styles.optionSelect}
                  style={{ cursor: 'pointer', padding: 8 }}
                  onClick={() => hanadleSelectItem(item.value)}
                >
                  {item.label}
                </div>
              </React.Fragment>
            ))
          ) : (
            <React.Fragment>
              <div style={{ minHeight: 40, padding: 8 }}></div>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
