const customHeader= (req, res, next)=> {
  try{
    const apiKey = req.headers.api_key;
    if (apiKey === 'meli-01') {
        next()
    } else {
        res.status(403)
        res.send({error: "api_key_incorrecta"})
    }
    
  }catch(e){
    res.status(403)
    res.send ({error: "algo_ocurrio"})
  }


}

module.exports = customHeader