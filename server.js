var express=require('express');
var mongoose=require('mongoose'); // mongoose para mongodb
var bodyParser  = require("body-parser");
var app=express();                 //Hacemos uso de Express

var port =process.env.PORT || 3000; // Seleccionamos el purto

//Conectamos Mongoose con mongodb
mongoose.connect('mongodb://localhost/MEAN');
app.use(express.static(__dirname+'/angular'));
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  


require('./app/routes.js')(app);

app.listen(port);
console.log('APP MEAN en el puerto: '+port);