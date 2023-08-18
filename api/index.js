const express = require('express');
const bodyParser = require('body-parser');

const postRoutes = require('./routes/post-routes');
const userRoutes = require('./routes/user-routes');
const HttpError = require('./models/http-error');

const app = express();
app.use(bodyParser.json());

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.use((req, res, next) => {
    const error = new HttpError("Unsupported route.", 404);
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json({message: error.message || "Something went wrong."});
})

app.listen(process.env.PORT || 3001);