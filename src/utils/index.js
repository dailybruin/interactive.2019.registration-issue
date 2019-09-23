import axios from "axios";
axios.defaults.withCredentials = true;

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
    return ft(axios.get(url, {
        withCredentials: true
    }))
}

function post(url, body) {
    return ft(axios.post(url, body))
}

const API_URL = "https://regissue2019.backend.dailybruin.com/api/"

export const api = {
    getMe: () => get(`${API_URL}me`),
    setUsername: username => post(`${API_URL}user`, { username }),
    score: () => post(`${API_URL}score`, {}),
    scores: () => get(`${API_URL}score`),
    getData: () => fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2019.regissue/")
}