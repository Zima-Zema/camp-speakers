import { useState } from "react";
import Header from './Header';
import Speakers from "./Speakers";

export default function App() {
    const [theme, setTheme] = useState('light');
    const handleTheme = (event) => {
        setTheme(event.target.value);
      }

    return (
        <div className={`container-fluid ${theme}`}>
            <Header theme={theme} />
            <Speakers theme={theme} handleTheme={handleTheme} />
        </div>
    )
}
