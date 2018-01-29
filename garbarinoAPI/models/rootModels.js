const connect = require ('../db/sequelize').connect;
const Sql = require ('../db/sequelize').Sequelize;
const initData = require('./initData');

//import models
const Item = require('./Item');

connect.sync({force: true})
.then(() => {

	console.log('initData', initData)

	initData.forEach(item => {
		Item.create(item).then(function (item) {
			// console.log(item)
		}).catch(err => console.log(err))	
	});

})


module.exports = { Item };