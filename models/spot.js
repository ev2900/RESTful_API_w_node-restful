
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var spotSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
});

// Return model
module.exports = restful.model('info', spotSchema);