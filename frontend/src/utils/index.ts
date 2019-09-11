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
        credentials: "include"
    }))
}

function post(url, body) {
    return ft(fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(body)
    }))
}

export const api = {
    getMe: () => get("/api/me"),
    setUsername: username => post("/api/user", { username }),
    score: () => post("/api/score", {})
}