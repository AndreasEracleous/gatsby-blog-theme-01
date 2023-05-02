// ThemeContext.js
import { SITE_CONFIG } from 'config/constants';
import PropTypes from 'prop-types';
import React, { useState, useEffect, createContext } from 'react';

const ThemeContext = createContext();

const getInitialTheme = (useDefaultDarkMode, useDefaultSystemColorTheme) => {
  if (typeof window !== 'undefined' && typeof window.localStorage === 'object') {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    if (useDefaultSystemColorTheme) {
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
  }

  return useDefaultDarkMode ? 'dark' : 'light'; // Dark theme as the default;
};

const setRawTheme = (rawTheme) => {
  const root = window.document.documentElement;
  const isDark = rawTheme === 'dark';

  root.classList.remove(isDark ? 'light' : 'dark');
  root.classList.add(rawTheme);

  localStorage.setItem('color-theme', rawTheme);
};

const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const { useDefaultDarkMode } = SITE_CONFIG;
    const { useDefaultSystemColorTheme } = SITE_CONFIG;

    const initial = getInitialTheme(useDefaultDarkMode, useDefaultSystemColorTheme);

    setTheme(initial);
  }, [initialTheme]);

  useEffect(() => {
    setRawTheme(theme);
  }, [theme]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { theme, setTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeProvider.defaultProps = {
  initialTheme: '',
};

ThemeProvider.propTypes = {
  initialTheme: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProvider };
