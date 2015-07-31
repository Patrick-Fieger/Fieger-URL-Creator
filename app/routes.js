var calc = require('./controller/calculator')

module.exports = function(app){
	app.post('/generate', calc.generateLink);
	app.get('/calculation',calc.calculation)
}