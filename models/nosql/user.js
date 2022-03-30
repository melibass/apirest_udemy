const mongoose = require('mongoose');
const mongooseDelete=require('mongoose-delete') // importo mongoose delete

//declarar esquema
const UserScheme = new mongoose.Schema(
    {
        //estructura del objeto
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            select:false // pra que no se devuelva el dato ni siquiera hasheado
        },
        role:{
            type:['user', 'admin'],
            default: 'user',
        },
    },
    {
        timestamps:true ,
        
        //todo createdAt, updatedAt
        versionKey: false
    }
);

UserScheme.plugin(mongooseDelete, { overrideMethods: "all"}) // implemento mongoose delete  + para sobreescribir metodos nativos de mongoose

module.exports = mongoose.model("users", UserScheme) //nombre de la table y nombre del modelo