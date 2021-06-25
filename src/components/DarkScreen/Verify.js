import React from 'react'

export const Verify = () => {

    const body = document.body;
    const btn  = document.getElementById('switch');

    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add('dark');
        btn.classList.toggle("active");
    } else {
        body.classList.remove('dark');
        btn.classList.remove("active");
    }
    
    return (
        <div>
            
        </div>
    )
}
