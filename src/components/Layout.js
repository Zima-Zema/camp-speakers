import { useState, createContext } from "react";

export const ThemeContext = createContext();


export default function Layout({startingTheme, children}) {
    const [theme, setTheme] = useState(startingTheme);
    const handleTheme = (event) => {
        setTheme(event.target.value);
    }

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            <div className={`container-fluid ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}