const express=require('express');
const fs=require('fs');
const router = express.Router();

const PATH_ROUTES= __dirname;


const  removeExtension = (fileName) =>{
    //tracks.js [track, js]
    return fileName.split('.').shift() //los divido en el punto y tomo la primera posicion
}
//devuelve un array con los diferentes archivos en la ruta, leyendo el directorio anterior.
fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file)
    if (name !== 'index'){
        router.use(`/${name}`, require(`./${file}`)) // http://localhost:3000/api/tracks x ejemplo
    }
})


module.exports= router