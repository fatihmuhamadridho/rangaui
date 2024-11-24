import { noop } from '@/constant/noop';
import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ThemeContextProps {
  theme?: 'light' | 'dark';
  setTheme: (props: 'light' | 'dark') => void;
  color?: 'white' | '#242424';
  setColor: (props: 'white' | '#242424') => void;
  backgroundColor?: 'white' | '#242424';
  setBackgroundColor: (props: 'white' | '#242424') => void;
  borderColor?: 'white' | '#242424';
  setBorderColor: (props: 'white' | '#242424') => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  setTheme: noop,
  color: 'white',
  setColor: noop,
  backgroundColor: '#242424',
  setBackgroundColor: noop,
  borderColor: '#242424',
  setBorderColor: noop,
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [theme, setTheme] = useState<'light' | 'dark' | undefined>();
  const [color, setColor] = useState<'white' | '#242424' | undefined>();
  const [backgroundColor, setBackgroundColor] = useState<'white' | '#242424' | undefined>();
  const [borderColor, setBorderColor] = useState<'white' | '#242424' | undefined>();

  useEffect(() => {
    localStorage.setItem('theme', 'dark');
    const themeLocal = localStorage.getItem('theme');
    if (themeLocal) {
      setTheme(themeLocal as any);
      if (themeLocal === 'dark') {
        setColor('white');
        setBackgroundColor('#242424');
        document.body.style.backgroundColor = '#242424';
      } else {
        setColor('#242424');
        setBackgroundColor('white');
      }
    } else if (!theme) {
      setTheme('light');
      setColor('#242424');
      setBackgroundColor('white');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        color,
        setColor,
        backgroundColor,
        setBackgroundColor,
        borderColor,
        setBorderColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
