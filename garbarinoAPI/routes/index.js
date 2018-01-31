var express = require('express');
var router = express.Router();

const Item = require('../models/rootModels.js').Item;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//CREAR ITEM

router.post('/item', function (req, res){
	console.log('into the post create item - body', req.body)
	Item.create(req.body).then (function(item){
		console.log('after of create item', item)
		return res.send(item)
	})
})

//GET ITEMS ALL

router.get('/items', function(req, res){
	Item.findAll().then(function(items){
		return res.send(items)
	})
})

//MODIFICAR ITEM

router.put('item/:id', function(req, res){
	Item.update(req.body, {
		where:{
			id: req.params.id
		}
	}).then(function(item){
			Item.findOne({where:{id: req.params.id}}).then(function(item){
				return res.send(item)
			})
	})
})

//ELIMINAR ITEM

router.delete('item/:id',  function(req, res){
	Item.destroy({where: {id: req.params.id}
	}).then (function(item){
		return res.send({message: "delete item"})
	})
})

module.exports = router;
