const { check, validationResult } = require('express-validator');
const validateResults = require('../utils/handleValidator')


const validatorRegister = [

    check('name')
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),   
    check('age')
    .exists()
    .notEmpty()
    .isNumeric(),//(min:8,max:32),
    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),      
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),   
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    
];
const validatorLogin = [
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),   
    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorRegister, validatorLogin };