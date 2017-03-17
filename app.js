const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

//Express setup
const app = express();
app.use(bodyParser.json());
app.use('/api', routes);

// Port 
app.listen(4040, function(){
    console.log('Ready to accept req.');
});


