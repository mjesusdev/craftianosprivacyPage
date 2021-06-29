import React, { useEffect, useState } from 'react';

export const DarkScreen = () => {

    const [ darkMode, setDarkMode ] = useState(false);

    const btn  = document.querySelector('.switch');
    const body = document.body;
    
    useEffect( () => {
        const json = localStorage.getItem('dark-mode');
        const currentMode = JSON.parse(json);

        if (currentMode) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, [])

    useEffect( () => {
        if (darkMode) {
            body.classList.add('dark');
            btn.classList.add('active');
        } else {
            body.classList.remove('dark');
            document.querySelector('.switch').classList.remove('active');
        }

        const json = JSON.stringify(darkMode);
        localStorage.setItem('dark-mode', json);
    }, [darkMode])

    return (
        <button 
            className='switch'
            id='switch'
            onClick={ () => setDarkMode(!darkMode) }
        >
            <span>💡</span>
            <span>🌑</span>
        </button>
    )
}
