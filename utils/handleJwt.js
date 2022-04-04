const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties= require('../utils/handlePropertiesEngine');
const propertiesKey = getProperties();

//firma token x backend, se le pasa el objeto de usuario - con sus datos
const tokenSign = async(user) => { 
    const sign = jwt.sign(
        //ala funcion le da igual el motor de DB, entonces lo q hacemos es checkear cual id viene, y usarla para el JWT
        {
            [propertiesKey.id]: user[propertiesKey.id],
            role: user.role
        },
        
            JWT_SECRET,
        
        {
            expiresIn:'6h',
        }
    );
    return sign
};

//incluye verificar firma- Debes pasar el token de sesion JWT
const verifyToken = async (tokenJwt) =>{
    try{
        return jwt.verify(tokenJwt, JWT_SECRET)
    }catch(e){
        return null
    }
};

module.exports = { tokenSign, verifyToken}