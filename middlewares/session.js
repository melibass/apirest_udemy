const { verifyToken } = require('../utils/handleJwt');
const { handleHttpError } = require('../utils/handleError');
const { usersModel } = require('../models')

const authMiddleware = async (req, res, next) =>{

        try{
            //capturar token
            if(!req.headers.authorization){
                handleHttpError(res,"Need_session",401)
                return
            }
            // llega como bearer(debo quitarlo)
            const token = req.headers.authorization.split(' ').pop();
            //verificamos la data de quien ingrsa gracias afuncion verifyToken
            const dataToken = await verifyToken(token);
            //checkear que hay id
            if(!dataToken._id){
                handleHttpError(res, "Error_id_token",401)
                return
            }
            //sirve para luego saber quien es el usuario que hace la peticion
            const user = await usersModel.findById(dataToken._id);
            req.user = user
            next()

        } catch(e){
            handleHttpError(res, "Not_Session", 401)
        }
}

module.exports = authMiddleware