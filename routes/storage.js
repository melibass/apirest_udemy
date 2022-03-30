const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage')
const { validatorGetItem } = require('../validators/storage')
const { getItems, getItem, createItem, deleteItem } = require('../controllers/storage');

// http://localhost:3001/storage

/** Listado */
router.get('/', getItems);

/** Detalle */
router.get('/:id', validatorGetItem, getItem);

/** Eliminar item */
router.delete('/:id',validatorGetItem, deleteItem);

/**Subir/crear UN archivo */
router.post('/', uploadMiddleware.single('myfile'), createItem);  // a traves del mw con single o multi pasamos como string el nombre de la propiedad por donde llega el archivo

    
module.exports = router;