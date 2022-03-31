const { handleHttpError } = require('../utils/handleError');


/** Array con roles permitidos */
const checkRol = (roles) => (req,res,next) =>{
    try{
        const { user } = req;
        console.log({user})
        const rolesByUser = user.role; // ["user"]
        
        //asegurarnos q el rol cumple
        //el array de roles tiene ciertos valores, yo me aseguro q alguno de los permisos estan
        const checkValueRol = roles.some((rolSingle) => 
            rolesByUser.includes(rolSingle)
            ); // true o false
        if (!checkValueRol){
            handleHttpError(res, "User_not_allowed", 403)
            return
        }

        next()
    } catch(e){
        handleHttpError(res, "Error_with_permissions", 403)
    }
};


module.exports= checkRol;