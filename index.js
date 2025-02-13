const express = require ('express');
    app = express();
    bodyParser = require('body-parser');
require('express-async-errors');

const db = require ('./db'),
    postsRoutes = require('./controllers/post.controller');

//middleware
app.use(bodyParser.json());
app.use('/api/posts', postsRoutes);

//error handeling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send('Something went wrong!');
});


//Starts application on localhost port 3000
app.listen(3000,
    () => console.log('Server Started on port 3000'));