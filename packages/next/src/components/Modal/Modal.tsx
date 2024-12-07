import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  overlayOpacity?: number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, overlayOpacity = 0.5 }) => {
  const modalElement = document.createElement('div');

  useEffect(() => {
    if (isOpen) {
      document.body.appendChild(modalElement);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (isOpen) {
        document.body.removeChild(modalElement);
        document.body.style.overflow = '';
      }
    };
  }, [isOpen, modalElement]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }}
        onClick={onClose}
      ></div>
      <div
        style={{
          position: 'relative',
          margin: 'auto',
          zIndex: 1001,
          maxWidth: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
        onClick={onClose}
      >
        <div
          style={{
            height: '100%',
            maxHeight: 400,
            width: '100%',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>,
    modalElement
  );
};

export default Modal;
