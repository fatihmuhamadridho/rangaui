import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, position = 'top', children }) => {
  const [visible, setVisible] = useState(false);

  const tooltipStyles: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: 'white',
    color: 'black',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    zIndex: 1000,
    transform: 'translate(-50%, -50%)',
  };

  const getTooltipPosition = (): React.CSSProperties => {
    switch (position) {
      case 'top':
        return { bottom: '70%', left: '50%' };
      case 'bottom':
        return { top: '100%', left: '50%', marginTop: '8px' };
      case 'left':
        return {
          right: '100%',
          top: '50%',
          marginRight: '8px',
          transform: 'translate(-50%, -50%)',
        };
      case 'right':
        return { left: '100%', top: '50%', marginLeft: '8px', transform: 'translate(0, -50%)' };
      default:
        return {};
    }
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div style={{ ...tooltipStyles, ...getTooltipPosition() }}>{content}</div>}
    </div>
  );
};

export default Tooltip;
