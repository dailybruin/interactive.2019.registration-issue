const router = require("express").Router();
const { getUsers, getUser, updateScore } = require("../services/UserService");
const banned = require("../banned.json");
const SCORE_INC = 10;

router.get("/api/me", async (req, res, next) => {
    console.log("Inside api/me")
    console.log("REQ.SESSION ID " + req.sessionID)
    if (req.session.username) {
        const { username } = req.session;
        try {
            const user = await getUser(username);
            res.json({
                username: user.username,
                score: user.score
            });
        } catch (err) {
            res.status(500).end();
        }
    } else {
        res.status(401).end();
    }
});

router.post("/api/user", async (req, res, next) => {
    console.log("Inside api/user")
    console.log("REQ.SESSION ID " + req.sessionID)
    const { username } = req.body;
    if (username) {
        let user = await getUser(username);
        if (user) {
            res.status(409).end();
        } else {
            if (banned[username]) {
                res.status(403).end();
            } else {
                user = await updateScore(username, 0);
                console.log("setting req.session.username to:")
                console.log(user.username)
                req.session.username = user.username;
                console.log("session after:")
                console.log(req.session);
                res.json(user);
            }
        }
    }
});

router.get("/api/score", async (req, res, next) => {
    console.log("Inside GET api/score")
    console.log("REQ.SESSION ID " + req.sessionID)
    let users;
    try {
        users = await getUsers();
    } catch (err) {
        res.status(500).end();
    }

    const scores = users.map(u => ({
        username: u.username,
        score: u.score
    }));

    res.json(scores);
})

router.post("/api/score", async (req, res, next) => {
    console.log("Inside POST api/score");
    console.log("REQ.SESSION ID " + req.sessionID)
    const { username } = req.session;
    console.log("Username", username)
    if (username) {
        let user;
        try {
            user = await getUser(username);
        } catch (err) {
            res.status(500).end();
        }

        const { score } = user;

        try {
            const newu = await updateScore(username, score + SCORE_INC);
            res.json(newu);
        } catch (err) {
            console.log(err)
            throw err;
        }
    }
});

module.exports = router;