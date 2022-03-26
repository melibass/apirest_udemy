const mongoose = require('mongoose');

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
            type:String
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

module.exports = mongoose.model("users", UserScheme) //nombre de la table y nombre del modelo