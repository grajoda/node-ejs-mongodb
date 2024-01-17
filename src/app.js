require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/dbConfig');


const app = express();

const path = require('path');
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use("/public",express.static("../public")); 
app.use(bodyParser.urlencoded({extended: true}));


const Routes = require('./routes/routes.js');
app.use('/', Routes);

const PORT = process.env.PORT
app.listen(PORT);
console.log('server online on port '+ PORT);