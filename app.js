// ADOPTAPET

// 1) Call dependencias
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createError = require('http-errors');
const mongoose = require('mongoose');

// Read .env file
dotenv.config();

// 2) Get Router
const router = require('./routes')

// App global object
const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Conexion de mongoose
const db_name = process.env.DB_DATABASE
const db_username = process.env.DB_USERNAME
const db_password = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${db_username}:${db_password}@cluster0.r9vdh.mongodb.net/${db_name}?retryWrites=true&w=majority`,
                { useUnifiedTopology: true, useNewUrlParser: true}
);

// Set Routes
app.use("/", router)

// Handling not found error 404
app.use(function(req, res, next) {
    next(res.status(404).send('Not Found'));
});

// Bootstrap
const server = app.listen(process.env.PORT || 3030, function(){
  console.log('App running. Listening on port ' + server.address().port);
  console.log('http://localhost:' + server.address().port)
});