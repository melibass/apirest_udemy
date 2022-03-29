require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect=require('./config/mongo')
const app = express()

app.use(cors());
app.use(express.json()); // recibimos los json por post
app.use(express.static('storage')); // le digo que todos los RR guardados en storage sean publicos


const port = process.env.PORT || 3000
/**
 * aqui invoco a las rutas
 */
//todo localhost:port/api/.......
app.use('/api', require('./routes'))

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})

dbConnect();