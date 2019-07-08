require('dotenv').config({path: './.env'});
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port =
 process.env.PORT;
const user = process.env.USER;
const pw = process.env.PW;
const connection = 'mongodb+srv://' + user + ':'+ pw + '@cluster0-uxecs.azure.mongodb.net/eventbrite-website-demo?retryWrites=true&w=majority';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./passport');

mongoose.connect(connection, 
    {useNewUrlParser: true, 'useCreateIndex': true}, 
    (err) => {
        if (err) throw err;
        console.log('Connection successful');
    }
);

let routes = require('./routes');
app.use(routes);

app.use(express.static('build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('../../', 'build'));
})

app.listen(port, () => console.log('Listening on port ' + port));