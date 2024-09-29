import {
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete
} from "../../db/procedimientos/procedimientoQuery.js";

/**
* Obtener todos de la base de datos
*/
const allController = async (req, res) => {
    try {
        const procedimientos = await queryAll();
        res.json(procedimientos); 
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Obtener 
 */
const findController = async (req, res) => {
    try {
        const procedimientos = await queryFind(req.params.id);
        res.json(procedimientos); 
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Crear 
 */
const createController = async (req, res) => {
    try {
        const resultado = await queryCreate(req.body); 
        res.json({ mensaje: 'procedimiento creado con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Actualizar
 */
const updateController = async (req, res) => {
    try {
        const resultado = await queryUpdate( req.params.id, req.body); 
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'procediemiento actualizado con éxito', categoria: resultado });
        } else {
            res.status(404).json({ mensaje: 'procedimiento no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Eliminar
 */
const deleteController = async (req, res) => {
    try {
       
        const resultado = await queryDelete(req.params.id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'procedimiento eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'procedimiento no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar ingrediente', error: error.message });
    }
};

export {
    allController,
    findController,
    createController,
    updateController,
    deleteController
};