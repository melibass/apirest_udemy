const express=require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth')
const { validatorRegister, validatorLogin } = require('../validators/auth');




// localhost.3001/auth


/**
 * Crear un registro
 */

// http://localhost:3001/api/auth/register
router.post('/register', validatorRegister, register);
router.post('/login', validatorLogin, login)





module.exports= router