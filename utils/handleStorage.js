const multer = require('multer')

const storage = multer.diskStorage({ // disco de almacenamiento
    destination: function(req,file,cb){ // donde va el archivo
        const pathStorage= `${__dirname}/../storage`;
        cb(null, pathStorage) // funcion final, donde primero se pasa un error si lo hay, y segundo un string: el destino del archivo
    },
    filename: function(req,file,cb){
        // todo tiene extension
        const ext = file.originalname.split('.').pop() // devuelve "name", "png" lo divido x punto, con pop tomo el ultimo valor de una array, opuesto a shift
        const filename = `file-${Date.now()}.${ext}` // file-nombre.extension
        cb(null, filename)

    }
});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware