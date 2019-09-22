function ft(func) {
    return func.then(function (data) {
        console.log('Request success: ', data);
        return data;
    })
        .catch(function (error) {
            console.log('Request failure: ', error);
        });
}

function get(url) {
    return ft(fetch(url, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
            "Access-Control-Allow-Credentials": true
        }
    }))
}

function post(url, body) {
    return ft(fetch(url, {
        method: "POST",
        headers: {
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
        credentials: "include",
        mode: "cors",
    }))
}

const API_URL = "https://regissue2019.backend.dailybruin.com/api/"

export const api = {
    getMe: () => get(`${API_URL}me`),
    setUsername: username => post(`${API_URL}user`, { username }),
    score: () => post(`${API_URL}score`, {}),
    scores: () => get(`${API_URL}score`),
    getData: () => fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2019.regissue/")
}