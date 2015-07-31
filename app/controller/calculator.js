var Calculator = require('../models/calculator'),
	random = require('randomstring'),
	url = "http://localhost:8888/print/#/"

function generateLink (req,res){
	var d = req.body;
	d.id = random.generate(10);
	Calculator.create(d,function(err,done){
		if(!err){
			res.send(url + "share/"+d.id).status(200).end();
		}else{
			res.status(500).end();
		}
	})
}

function calculation (req,res){
	Calculator.findOne({id : req.query.id},function(err,calc){
		if(!err){
			res.send(calc.calc).status(200).end();
		}else{
			res.status(500).end();
		}
	})
}

module.exports = {
	generateLink : generateLink,
	calculation : calculation
}