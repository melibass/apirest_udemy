const { validationResult } = require('express-validator');

const validateResults = (req,res,next) => {
    try{
        validationResult(req).throw() // valida la peticion y sino cumple error - catch
        return next()//continua hacia el controlador
    }catch(err){
        res.status(403)
        res.send({ errors: err.array()})
    }
}

module.exports = validateResults;