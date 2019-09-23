import axios from "axios";
axios.defaults.withCredentials = true;

function get(url) {
    return fetch(url, {
        credentials: "include"
    })
}

function post(url, body) {
    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: "include"
    })
}

const API_URL = "https://regissue2019.backend.dailybruin.com/api/";

function setUsernameCookie(username) {
    const date = new Date();
    date.setTime(date.getTime() + (30 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = "username=" + username + ";" + expires + ";path=/";
}

const REG = /username=(.*)/;
function getUsernameCookie() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const match = cookies[i].trim().match(REG);
        if (match !== null) {
            return match[1];
        }
    }
    return null;
}

function setUsername(username) {
    return post(`${API_URL}user`, { username }).then(res => {
        if (res && res.status === 200) {
            setUsernameCookie(username)
            return "ok";
        } else if (res && res.status === 403) {
            return "banned";
        } else {
            return "taken";
        }
    }).catch(e => "taken");
}

function score() {
    const username = getUsernameCookie();
    if (username) {
        return post(`${API_URL}score`, { username })
    } else {
        throw new Error;
    }
}

export const api = {
    getMe: getUsernameCookie,
    setUsername,
    score,
    scores: () => get(`${API_URL}score`),
    getData: () => fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2019.regissue/")
}