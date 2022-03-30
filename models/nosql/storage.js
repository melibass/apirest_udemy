const mongoose = require('mongoose');
const mongooseDelete=require('mongoose-delete') // importo mongoose delete
//declarar esquema
const StorageScheme = new mongoose.Schema(
    {
        //estructura del objeto
        url:{
            type:String
        },
        filename:{
            type:String
        }
    },
    {
        timestamps:true ,
        
        //todo createdAt, updatedAt
        versionKey: false
    }
);

StorageScheme.plugin(mongooseDelete, { overrideMethods: "all"}) // implemento mongoose delete  + para sobreescribir metodos nativos de mongoose
module.exports = mongoose.model("storage", StorageScheme) //nombre de la table y nombre del modelo