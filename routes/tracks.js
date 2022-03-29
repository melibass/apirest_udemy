const express=require('express');
const router = express.Router();
const customHeader = require('../middlewares/customHeader')
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const { getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/tracks');

// localhost.3001/tracks

/**
 * Listar items
 */
router.get('/',  getItems);
/**
 * obtener detalle de item
 */
 router.get('/:id', validatorGetItem,  getItem);
/**
 * Crear items
 */
router.post('/', validatorCreateItem, createItem);
/**
 * Actualizar un item
 */
 router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);
/**
 * Elimina un item
 */ 
 router.delete('/:id', validatorGetItem, deleteItem);
 






module.exports= router