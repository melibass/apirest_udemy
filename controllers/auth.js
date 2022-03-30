const { matchedData } = require('express-validator');
const {encrypt, compare} = require('../utils/handlePassword')
const { usersModel } = require('../models')
const { tokenSign } = require('../utils/handleJwt')
const { handleHttpError } = require ('../utils/handleError')

/*** Registro un usuario */

const register = async (req, res) =>{
    try{
        req = matchedData(req);
        const password = await encrypt(req.password)
        const body = {...req, password} // creamos un objeto nuevo duplicado de lo que ya viene arriba y le sobreescribimos algo, en este caso password
        const dataUser = await usersModel.create(body)
        dataUser.set('password', undefined, {strict: false});// para no mostrar el dato de password
        
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
    
        
        res.send({data})
    }catch(e){
        handleHttpError(res, "Error_register_user")
    }
    }

/** controlador de loguear */
const login = async (req,res)=>{
    try{
        req = matchedData(req);
        const user = await usersModel.findOne({email: req.email}).select('password name email role');
        if(!user){
            handleHttpError(res, "User doesn't exists", 404);
            return
        }
        const hashPassword = user.get('password');
        const check = await compare(req.password, hashPassword)
        if (!check){
            handleHttpError(res, "INVALID PASSWORD", 401);
            return
        }
        
        user.set('password', undefined, {strict:false})
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send({data})
    }catch(e){
        handleHttpError(res, "Error_login_user")
    }
}


module.exports = { register, login }