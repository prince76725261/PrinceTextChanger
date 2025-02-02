import React, { useState } from "react";
import './DarkMode.css';

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        console.log("Toggling dark mode:", newMode);
        setDarkMode(newMode);
        if (newMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    return (
        <div className="dark-mode-toggle">
            <button 
                type="button" 
                className={`btn btn-outline-dark ${darkMode ? 'active' : ''}`} 
                onClick={toggleDarkMode}
            >
                <i className={`fas fa-${darkMode ? 'sun' : 'moon'}`}></i>
            </button>
        </div>
    );
}
