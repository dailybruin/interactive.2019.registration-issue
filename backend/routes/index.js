const router = require("express").Router();
const { getUsers, getUser, updateScore } = require("../services/UserService");
const banned = require("../banned.json");
const SCORE_INC = 10;

router.get("/api/me", async (req, res, next) => {
    console.log("Inside api/me")
    console.log("REQ.SESSION ID " + req.sessionID)
    if (req.session.user) {
        console.log("Session exists", req.session);
        const { username } = req.session.user;
        try {
            const user = await getUser(username);
            res.json({
                username: user.username,
                score: user.score
            });
            return next();
        } catch (err) {
            res.status(500).end();
            return next(err);
        }
    } else {
        res.status(401).end();
        return next();
    }
});

router.post("/api/user", async (req, res, next) => {
    console.log("Inside api/user")
    console.log("REQ.SESSION ID " + req.sessionID)
    const { username } = req.body;
    console.log("Username", username)
    if (username) {
        let user = await getUser(username);
        if (user) {
            res.status(409).end();
            return next();
        } else {
            if (banned[username]) {
                res.status(403).end();
                return next();
            } else {
                user = await updateScore(username, 0);
                console.log("setting req.session.user to:")
                console.log(user)
                req.session.user = user;
                req.session.save();
                console.log("session after:")
                console.log(req.session);
                res.json(user);
                return next();
            }
        }
    }
});

router.get("/api/score", async (req, res, next) => {
    console.log("REQ.SESSION ID " + req.sessionID)
    let users;
    try {
        users = await getUsers();
    } catch (err) {
        res.status(500).end();
        return next(err);
    }

    const scores = users.map(u => ({
        username: u.username,
        score: u.score
    }));

    res.json(scores);
    return next();
})

router.post("/api/score", async (req, res, next) => {
    console.log("Inside api/score");
    console.log("REQ.SESSION ID " + req.sessionID)
    console.log("req.session: ")
    console.log(req.session)
    const { username } = req.session.user;
    console.log("Username", username)
    if (username) {
        let user;
        try {
            user = await getUser(username);
        } catch (err) {
            res.status(500).end();
            return next(err);
        }

        const { score } = user;

        try {
            const newu = await updateScore(username, score + SCORE_INC);
            console.log(newu)
            req.session.user = newu;
            req.session.save();
            res.json(newu);
            return next();
        } catch (err) {
            console.log(err)
            throw err;
        }
    }
});

module.exports = router;