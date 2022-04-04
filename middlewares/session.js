const { verifyToken } = require('../utils/handleJwt');
const { handleHttpError } = require('../utils/handleError');
const { usersModel } = require('../models')
const getProperties= require('../utils/handlePropertiesEngine');
const propertiesKey = getProperties();

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
            //si viene vacio
            if(!dataToken){
                handleHttpError(res, "No data for payload",401)
                return
            }
            //checkear que hay id
            // query con un where x ejemplo
            const query = {
                [propertiesKey.id]:dataToken[propertiesKey.id]
            }
            
            //sirve para luego saber quien es el usuario que hace la peticion
            const user = await usersModel.findOne(query);
            req.user = user
            next()

        } catch(e){
            handleHttpError(res, "Not_Session", 401)
        }
}

module.exports = authMiddleware