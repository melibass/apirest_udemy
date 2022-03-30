const bcryptjs = require('bcryptjs')

/**
 * contraseña sin encriptar = 123456
 */
const encrypt = async(passwordPlain)=>{
    const hash = await bcryptjs.hash(passwordPlain, 10) // texto plano del password, numero que le da mayor aleatoriedad al hash
    //"1545ghfdhfgd$%436456" version encriptada de la contraseña
    return hash
};

/** Comparar la contraseña con su version encriptada */
const compare = async(passwordPlain, hashPassword)=>{
    return await bcryptjs.compare(passwordPlain, hashPassword)
}


module.exports = {encrypt, compare}