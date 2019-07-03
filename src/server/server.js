require('dotenv').config({path: './.env'});
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
<<<<<<< HEAD
const port = process.env.PORT;
=======
const port = process.env.SERVER_PORT;
>>>>>>> cb46eecdada96137d5074914f233ecacf8615674
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

<<<<<<< HEAD
=======
//allow CORS for frontend to query api
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

>>>>>>> cb46eecdada96137d5074914f233ecacf8615674
let routes = require('./routes');
app.use(routes);

app.use(express.static('build'));

<<<<<<< HEAD
app.get('*', (req, res) => {
    res.sendFile(path.resolve('../../', 'build'));
})
=======
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('../../', 'build'));
    })

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })

}
>>>>>>> cb46eecdada96137d5074914f233ecacf8615674

app.listen(port, () => console.log('Listening on port ' + port));