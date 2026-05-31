/**
 * Generic hook for persisting state in localStorage.
 * Demonstrates TypeScript generics.
 */

import { useState, useEffect } from 'react';

/**
 * @template T - The type of the stored value
 * @param key - localStorage key
 * @param initialValue - Default value if key does not exist
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      // Silently fail in environments where localStorage is unavailable
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
