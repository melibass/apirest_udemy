const { tracksModel } = require('../models');


/**
 * Obtener todos los registros
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) =>{
    const data = await tracksModel.find({}); //espera a que retorne algo con el await

    res.send({data})
};

/**
 * Obtener UN registro y su detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) =>{};

/**
 * Crear un registro
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req, res) =>{
    const { body } = req
    console.log(body)
    const data = await tracksModel.create(body)
    res.send({ data })
};

/**
 * Editar/actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) =>{};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) =>{};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem}