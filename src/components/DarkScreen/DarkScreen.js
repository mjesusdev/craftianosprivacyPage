import React from 'react';

import { useDispatch } from 'react-redux';
import { uiDarkModeTrue, uiDarkModeFalse } from '../../actions/ui';

/* import './Verify'; */

export const DarkScreen = () => {

    const dispatch = useDispatch();

    const body = document.body;
    const btn  = document.getElementById('switch');

    const handleClick = () => {
        body.classList.add('dark');
        btn.classList.toggle('active');

        if ( body.className === 'dark' ) {
            localStorage.setItem("dark-mode", "true");
            dispatch( uiDarkModeTrue() );
        } else {
            localStorage.setItem("dark-mode", "false");
            dispatch( uiDarkModeFalse() );
        }
    }

    return (
        <button 
            className='switch'
            id='switch'
            onClick={ handleClick }
        >
            <span>💡</span>
            <span>🌑</span>
        </button>
    )
}
