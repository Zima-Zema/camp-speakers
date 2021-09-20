import { useState } from "react";

import SpeakersToolbar from './SpeakersToolbar';
import SpeakerList from './SpeakerList';

export default function Speakers({ theme, handleTheme }) {
    const [showSessions, setShowSessions] = useState(true);

    const handleShowSessions = (event) => {
        setShowSessions(event.target.checked);
    }
    return (
        <>
            <SpeakersToolbar
                theme={theme}
                handleTheme={handleTheme}
                showSessions={showSessions}
                handleShowSessions={handleShowSessions}
            />
            <SpeakerList
                showSessions={showSessions}
            />
        </>
    )
}