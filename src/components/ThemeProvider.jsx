import { createContext, useContext, useEffect, useState } from 'react';
import { themes } from '../utils/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const theme = savedTheme == 'dark' ? themes.dark : themes.light;
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value);
        });
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark, toggleTheme }}>
            <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-background text-text' : 'bg-background text-text'}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext); 