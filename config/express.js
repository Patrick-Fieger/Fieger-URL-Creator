   express = require('express')
 , morgan = require('morgan')
 , bodyParser = require('body-parser')

module.exports = function(app){
	app.use(morgan('dev'));
	app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
}

