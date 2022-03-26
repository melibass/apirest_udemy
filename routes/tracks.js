const express=require('express');
const router = express.Router();


// localhost.3001/tracks

router.get('/', (req,res)=> {
    const data = ['hola', 'mundo'] 

    res.send({data})
})

module.exports= router