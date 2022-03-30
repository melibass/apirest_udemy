const fs = require('fs');
const { matchedData } = require('express-validator');
const { storageModel } = require('../models');
const { handleHttpError } = require('../utils/handleError')



const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`
/**
 * Obtener todos los registros
 
 */

const getItems = async (req, res) =>{
    try{
        const data = await storageModel.find({}); //espera a que retorne algo con el await

    res.send({data})
    }catch(e){
        handleHttpError(res, "Error_list_items")
    }
    
};

/**
 * Obtener UN registro y su detalle
 
 */
const getItem = async (req, res) =>{
    try{
        const { id } = matchedData(req)
        const data = await storageModel.findById(id); //espera a que retorne algo con el await

    res.send({data})
    }catch(e){
        handleHttpError(res, "Error_detail_item")
    }
};

/**
 * Crear un registro
 
 */

const createItem = async (req, res) =>{
    try{
    const { file } = req
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({ data })
    }catch(e){
        handleHttpError(res, "Error_upload_file")   
    }
};

/**
 * Eliminar un registro

 */
const deleteItem = async(req, res) =>{
    try{
        const { id } = matchedData(req)
        const dataFile = await storageModel.findById(id); //espera a que retorne algo con el await
        await storageModel.delete({_id:id});
        const { filename } = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`; // c:/miproyecto/file-1235.png
       // fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleted: 1
        }

    res.send({data})
    }catch(e){
        handleHttpError(res, "Error_detail_item")
    }

};


module.exports = { getItems, getItem, createItem, deleteItem}