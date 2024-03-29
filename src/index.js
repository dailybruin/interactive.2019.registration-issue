import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Cookie Utilities
function setVisitedCookie() {
    const date = new Date();
    date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = "visited=true;" + expires + ";path=/";
}

function checkVisitedCookie() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].trim() === "visited=true") {
            return true;
        }
    }
    return false;
}

if (document != null) {
    const visited = checkVisitedCookie();
    if (!visited) {
        setVisitedCookie();
    }

    ReactDOM.render(<App visited={visited} />, document.getElementById('root'));

}
