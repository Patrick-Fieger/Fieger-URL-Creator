var mongoose = require('mongoose')

var CalculatorSchema = mongoose.Schema({
  id: {type: String,required : true, unique:true},
  type : {type: String},
  calc : {type: Array}
});

var Calculator = mongoose.model('Calculators', CalculatorSchema);
module.exports = Calculator;