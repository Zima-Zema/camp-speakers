import { createContext } from "react";
import useTheme from '../hooks/useTheme';

export const ThemeContext = createContext();

export function ThemeProvider({startingTheme, children}) {
    const {theme, setTheme} = useTheme(startingTheme);
    
    const handleTheme = (event) => {
        setTheme(event.target.value);
    }

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            <div>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}