const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');



//conectar mongo
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/restapi');
mongoose.connect('mongodb://127.0.0.1:27017/restapi')
  .then(() => console.log('Connected!'));



// mongoose.connect('mongodb://127.0.0.1:27017/restapi')
//   .then(() => console.log('Connected!'));

//crear el servidor

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());




const PORT = 3500;

//puerto
app.listen(PORT, () =>{
    console.log('el servidor se esta ejecutando en el puerto  '+PORT)
})


