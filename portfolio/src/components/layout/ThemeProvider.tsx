/**
 * ThemeProvider wraps the app to supply theme context.
 * Persists user preference in localStorage.
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeContextValue } from '../../types';
import { ThemeContext } from '../../hooks/useTheme';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface ThemeProviderProps {
  readonly children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [stored, setStored] = useLocalStorage<Theme>('portfolio-theme', Theme.Dark);
  const [theme, setTheme] = useState<Theme>(stored);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    setStored(theme);
  }, [theme, setStored]);

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === Theme.Dark ? Theme.Light : Theme.Dark));
  };

  const value: ThemeContextValue = { theme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
