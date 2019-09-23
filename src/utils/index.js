import axios from "axios";
axios.defaults.withCredentials = true;

function ft(func) {
    return func.then(res => ({
        data: res.data,
        status: res.status
    })).catch(error => {
        if (error.response) {
            if (error.response.status) {
                return {
                    status: error.response.status
                };
            }
        }
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