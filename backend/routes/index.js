const router = require("express").Router();
const rateLimit = require("express-rate-limit");

const { getUsers, getUser, updateScore } = require("../services/UserService");
const banned = require("../banned.json");
const SCORE_INC = 10;
const MIN = 30 * 1000; // 30 seconds

const limiter = rateLimit({
    windowMs: MIN,
    max: 45 // limit each IP to 100 requests per windowMs
});

router.post("/api/user", async (req, res, next) => {
    console.log("Inside api/user")
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
                res.json(user);
            }
        }
    }
});

router.get("/api/score", async (req, res, next) => {
    console.log("Inside GET api/score")
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

router.post("/api/score", limiter, async (req, res, next) => {
    console.log("Inside POST api/score");
    const { username } = req.body;
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
    } else {
        res.status(401).end();
    }
});

module.exports = router;