import React, { useState, ReactNode, ReactElement, useEffect, useRef } from 'react';
import styles from './Accordion.module.css';

interface AccordionItemProps {
  children?: ReactNode;
  value?: string;
  activeValue?: string;
  onToggle?: (value: string) => void;
}

const AccordionItem = (props: AccordionItemProps) => {
  const { children, value, activeValue, onToggle } = props;
  const isActive = value === activeValue;

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === AccordionControl) {
            return React.cloneElement(child as ReactElement<any>, {
              isActive,
              onClick: () => onToggle?.(value!),
            });
          }
          if (child.type === AccordionPanel) {
            return React.cloneElement(child as ReactElement<any>, {
              isActive,
            });
          }
        }
        return child;
      })}
    </div>
  );
};

interface AccordionControlProps {
  children?: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

const AccordionControl = (props: AccordionControlProps) => {
  const { children, onClick, isActive } = props;

  return (
    <div
      className={styles.accordionControl}
      style={{ borderBottom: !isActive ? '1px solid gray' : 'none' }}
      onClick={onClick}
    >
      <div>{children}</div>
      <div
        style={{
          transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'all 200ms',
        }}
      >
        <svg
          fill="none"
          style={{ display: 'block', height: 24, width: 24 }}
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

interface AccordionPanelProps {
  children?: ReactNode;
  isActive?: boolean;
}

const AccordionPanel = (props: AccordionPanelProps) => {
  const { children, isActive } = props;
  const [height, setHeight] = useState<string | number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      setHeight(120);
      const timer = setTimeout(() => {
        setHeight('auto');
      }, 10);

      return () => clearTimeout(timer);
    } else {
      setHeight(0);
    }
  }, [isActive]);

  return (
    <div
      ref={contentRef}
      style={{
        borderBottom: isActive ? '1px solid gray' : 'none',
        height: height,
        opacity: isActive ? 1 : 0,
        overflow: 'hidden',
        padding: isActive ? '5px 16px 16px 16px' : '0px 16px 0px 16px',
        transition: 'height 100ms ease, opacity 200ms ease, padding 200ms ease',
        willChange: 'height',
      }}
    >
      {children}
    </div>
  );
};

interface AccordionProps {
  children?: ReactNode;
  defaultValue?: string;
}

const Accordion = (props: AccordionProps) => {
  const { children, defaultValue } = props;
  const [activeValue, setActiveValue] = useState<string | null>(defaultValue || null);

  const handleToggle = (value: string) => {
    setActiveValue((prevValue) => (prevValue === value ? null : value));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === AccordionItem) {
            return React.cloneElement(child as ReactElement<any>, {
              activeValue,
              onToggle: handleToggle,
            });
          }
        }
        return child;
      })}
    </div>
  );
};

Accordion.classes = styles;
Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;

export default Accordion;
