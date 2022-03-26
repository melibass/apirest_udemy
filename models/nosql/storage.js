const mongoose = require('mongoose');

//declarar esquema
const StorageScheme = new mongoose.Schema(
    {
        //estructura del objeto
        url:{
            type:String
        },
        filename:{
            type:Number
        }
    },
    {
        timestamps:true ,
        
        //todo createdAt, updatedAt
        versionKey: false
    }
);

module.exports = mongoose.model("storage", StorageScheme) //nombre de la table y nombre del modelo