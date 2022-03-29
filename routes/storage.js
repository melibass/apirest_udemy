const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage')
const { createItem } = require('../controllers/storage');

// http://localhost:3001/storage


router.post('/', uploadMiddleware.single('myfile'), createItem);  // a traves del mw con single o multi pasamos como string el nombre de la propiedad por donde llega el archivo
    
module.exports = router;