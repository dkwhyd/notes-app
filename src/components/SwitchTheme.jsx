import React from 'react';
import { useTheme } from './ThemeContext';

export default function SwitchTheme() {
  const { theme, toggleTheme } = useTheme();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      toggleTheme();
    }
  };

  return (
    <div className="theme-container">
      <div
        role="button"
        tabIndex={0}
        onClick={toggleTheme}
        onKeyPress={handleKeyPress}
        className="theme-switch"
      >
        {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
      </div>
    </div>
  );
}
