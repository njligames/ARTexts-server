var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/arTextsModel'),
    bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Textsdb', {
    useMongoClient: true,
    }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/arTextsRoutes');
routes(app);


app.listen(port);


console.log('Augmented Reality Texts RESTful API server started on: ' + port);
