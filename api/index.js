const express = require('express');
const bodyParser = require('body-parser');

const postRoutes = require('./routes/post-routes');
const userRoutes = require('./routes/user-routes');

const app = express();
// app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json({message: error.message || "Something went wrong."});
})

app.listen(process.env.PORT || 3001);