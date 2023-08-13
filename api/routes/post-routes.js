const express = require('express');
const HttpError = require('../models/http-error');

const router = express.Router();


const DUMMY_POSTS = [
    {
        title: "New Post",
        description: "Testing express middlewares",
        content: "## Is this working?\nYes, it is!",
        id: "new-post",
        author: "DaveIsNo1",
        date: 1691903898059
    }
]

router.get('/', (req, res, next) => {
    console.log("GET request in post-routes");
    res.json(DUMMY_POSTS);
})

router.get('/:postId', (req, res, next) => {
    const postId = req.params.postId;
    const post = DUMMY_POSTS.find(post => post.id === postId);
    if (post) res.json(post);
    else next( new HttpError("could not find a place with id " + postId, 404) );
})

router.get('/user/:userId', (req, res, next) => {
    const userId = req.params.userId;
    const posts = DUMMY_POSTS.filter(post => post.author === userId);
    res.json(posts);
})

module.exports = router;