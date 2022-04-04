require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morganBody = require('morgan-body');
const dbConnectNoSql=require('./config/mongo');
const app = express()
const loggerStream = require('./utils/handleLogger');
const { dbConnectMySql } = require('./config/mysql');
const ENGINE_DB = process.env.ENGINE_DB;





  


app.use(cors());
app.use(express.json()); // recibimos los json por post
app.use(express.static('storage')); // le digo que todos los RR guardados en storage sean publicos

morganBody(app,{
    noColors:true,
    stream: loggerStream,
    skip: function (req,res){
        return res.statusCode < 400 // rango de 200 o 300 sera omitdo, envia todo de 400 para arriba
    }

})

const port = process.env.PORT || 3003
/**
 * aqui invoco a las rutas
 */
//todo localhost:port/api/.......
app.use('/api', require('./routes'))


app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
});



(ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMySql() ;