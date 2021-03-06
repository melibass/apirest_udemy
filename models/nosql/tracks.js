const mongoose = require('mongoose');
const mongooseDelete=require('mongoose-delete') // importo mongoose delete

//declarar esquema
const TracksScheme = new mongoose.Schema(
    {
        //estructura del objeto
        name:{
            type:String
        },
        album:{
            type:String
        },
        cover:{
            type:String,
            validate:{ 
                validator:(req) =>{
                    return true;
                }, 
                message: "ERROR_URL"
            }
        },
        artist:{
            name:{
                type:String,
            },
            nickname:{
                type:String,
            },
            nationality:{
                type:String
            }
        },
        duration:{
            start:{
                type:Number,
            },
            end:{
                type:Number,
            }
        },
        mediaID:{ //tipo de dato que no es simplemente un string.
            type:mongoose.Types.ObjectId,
        }
    },
    {
        timestamps:true ,
        
        //todo createdAt, updatedAt
        versionKey: false
    }
);
/** Implementar metodo propio con relacion a storage */
TracksScheme.statics.findAllData = function() {
    const joinData= this.aggregate([
        {
            $lookup: {
                from: "storages", // relaciono tracks y storage
                localField: "mediaId", // a traves de tracks.mediaId
                foreingField: "_id", //con storages._id media_id = _id
                as: "audio", // el alias 
            }
        }
    ]) 
    return joinData;
}

TracksScheme.plugin(mongooseDelete, { overrideMethods: "all"}) // implemento mongoose delete  + para sobreescribir metodos nativos de mongoose

module.exports = mongoose.model("tracks", TracksScheme) //nombre de la table y nombre del modelo