const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
//firma token x backend, se le pasa el objeto de usuario - con sus datos
const tokenSign = async(user) => { 
    const sign = jwt.sign(
        {
            _id: user._id,
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