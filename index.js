const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const session = require('express-session');

app.use(session({secret: 'euh',resave: false,saveUninitialized: true}));
app.use(bodyParser.json());

require('dotenv').config();

const uri = 'mongodb+srv://' + process.env.MONGO_USER + ':' + process.env.MONGO_PW + '@styloxis.96iwhuo.mongodb.net/' + process.env.MONGO_DB +'?retryWrites=true&w=majority';
mongoose.connect(uri)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));



require("./routes/userRoutes")(app, mongoose);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running`);
});