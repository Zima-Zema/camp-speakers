import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";


export default function Layout({ startingTheme, children }) {
    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
        </ThemeProvider>
    );
}
function LayoutNoThemeProvider({ children }) {

    const { theme } = useContext(ThemeContext);
   
    return (
        <div className={`container-fluid ${theme}`}>
            {children}
        </div>
    );
}