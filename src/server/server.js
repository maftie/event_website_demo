require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;
const user = process.env.USERNAME;
const pw = process.env.PW;
const connection = 'mongodb+srv://' + user + ':'+ pw + '@cluster0-uxecs.azure.mongodb.net/eventbrite-website-demo?retryWrites=true&w=majority';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./passport');
try {
    mongoose.connect(connection, 
        {useNewUrlParser: true, 'useCreateIndex': true}, 
        (err) => {
            if (err) throw err;
            console.log('Connection successful');
        }
    );
}catch(err) {
    console.log('Error: ' + err);
}

let routes = require('./routes');
app.use(cors());
app.use(routes);

if(process.env.NODE_ENV === 'production') {
    console.log('production');
    app.use(express.static('build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}

app.listen(port, () => console.log('Listening on port ' + port));