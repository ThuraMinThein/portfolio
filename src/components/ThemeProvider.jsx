import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes } from '../utils/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const theme = isDark ? themes.dark : themes.light;
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value);
        });
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-background text-text' : 'bg-background text-text'}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext); 