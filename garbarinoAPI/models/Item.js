const connect = require('../db/sequelize').connect;
const Sql= require('../db/sequelize').Sequelize;

let Item = connect.define('item', {
	name: { type: Sql.STRING, allowNull: false },
	price: { type: Sql.FLOAT, allowNull: false},
	list_price: { type: Sql.FLOAT, allowNull: false},
	brand: { type: Sql.STRING, allowNull: false },
	category_id: { type: Sql.INTEGER, allowNull: false},
  });

module.exports = Item;