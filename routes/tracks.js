const express=require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/session');
const checkRol = require('../middlewares/rol')
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const { getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/tracks');

// localhost.3001/tracks

/**
 * Listar items
 */
router.get('/',authMiddleware, getItems);
/**
 * obtener detalle de item
 */
 router.get('/:id',authMiddleware, validatorGetItem,  getItem);
/**
 * Crear items
 */
router.post('/',
    authMiddleware,
    checkRol(["admin"]), // va despues del otro, porqu una vez q checkea lapersona, se fija si es admin
    validatorCreateItem, 
    createItem);
/**
 * Actualizar un item
 */
 router.put('/:id',authMiddleware, validatorGetItem, validatorCreateItem, updateItem);
/**
 * Elimina un item
 */ 
 router.delete('/:id',authMiddleware, validatorGetItem, deleteItem);
 






module.exports= router