var Sequelize = require("sequelize"); //requerimos el modulo
var connect = new Sequelize('postgres://garbarino:admin@postgres:5432/garbarinodb');
module.exports = { connect, Sequelize};