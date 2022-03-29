const { matchedData } = require('express-validator'); // sirve para a la hora de validar, obtener solo los datos que queremos!
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');


/**
 * Obtener todos los registros
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) =>{
    try{
        const data = await tracksModel.find({}); //espera a que retorne algo con el await

        res.send({data})
    }catch(e){
        handleHttpError(res, "Error_get_items")

    }

   
};

/**
 * Obtener UN registro y su detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async(req, res) =>{
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id); //espera a que retorne algo con el await

        res.send({data})
    } catch(e){
        handleHttpError(res, "error_get_item")
    }
};

/**
 * Crear un registro
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req, res) =>{
    try{
        const body= matchedData(req);

        const data = await tracksModel.create(body)
        res.send({ data })
    } catch(e){
        handleHttpError(res, "Error_create_items")
    }
    
    
};

/**
 * Editar/actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) =>{
    try{
        const { id, ...body } = matchedData(req); // de un objeto creo dos: uno con id y otro con el resto asi luego no los piso
        const data = await tracksModel.findOneAndUpdate(
            id, body
        );
        res.send({ data })
    } catch(e){
        handleHttpError(res, "Error_update_items")
    }
    
};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) =>{
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.deleteOne({_id:id}); //espera a que retorne algo con el await

        res.send({data})
    } catch(e){
        console.log(e)
        handleHttpError(res, "error_delete_item")
    }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem}