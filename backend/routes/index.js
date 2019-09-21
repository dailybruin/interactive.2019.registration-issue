const router = require("express").Router();
const { getUsers, getUser, updateScore } = require("../services/UserService");
const SCORE_INC = 10;

router.get("/api/me", async (req, res, next) => {
    console.log("Inside api/me")
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
    const { username } = req.body;
    console.log("Username", username)
    if (username) {
        let user = await getUser(username);
        console.log("User", user)
        if (user) {
            res.status(409).end();
            return next();
        } else {
            user = await updateScore(username, 0);
            console.log("User", user)
            req.session.user = user;
            res.json(user);
            return next();
        }
    }
});

router.get("/api/score", async (req, res, next) => {
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
    console.log("Inside api/user")
    const { username } = req.session.passport.user;
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
            res.json(newu);
            return next();
        } catch (err) {
            console.log(err)
            throw err;
        }
    }
});

module.exports = router;