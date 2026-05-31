/**
 * Theme context providing dark/light mode state across the application.
 * Uses React Context with strict TypeScript typing.
 */

import { createContext, useContext } from 'react';
import { Theme, ThemeContextValue } from '../types';

export const ThemeContext = createContext<ThemeContextValue>({
  theme: Theme.Dark,
  toggleTheme: () => undefined,
});

/**
 * Custom hook to consume the ThemeContext.
 * Throws if used outside of ThemeProvider for safety.
 */
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
