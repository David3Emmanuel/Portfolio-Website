const express = require('express');

const router = express.Router();

const DUMMY_USERS = [
    { uid: "DaveIsNo1", username: "DaveIsNo1", role: "admin" }
]

router.get('/:userId', (req, res, next) => {
    const userId = req.params.userId;
    const user = DUMMY_USERS.find(user => user.uid === userId);
    if (user) res.json(user);
    else next( new HttpError("could not find a user with id " + userId, 404) );
})

module.exports = router;