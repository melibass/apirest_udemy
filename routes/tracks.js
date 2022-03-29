const express=require('express');
const router = express.Router();
const { validatorCreateItem } = require('../validators/tracks');
const { getItems, getItem, createItem} = require('../controllers/tracks');

// localhost.3001/tracks

router.get('/',  getItems);

router.post('/', validatorCreateItem, createItem);



module.exports= router