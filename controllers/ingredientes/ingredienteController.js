import {
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete
} from "../../db/ingredientes/ingredienteQuery.js";

/**
* Obtener todos  de la base de datos
*/
const allController = async (req, res) => {
    try {
        const ingredientes = await queryAll();
        res.json(ingredientes); 
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Obtener 
 */
const findController = async (req, res) => {
    try {
        const ingredientes = await queryFind(req.params.id);
        res.json(ingredientes); 
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
        res.json({ mensaje: 'Receta agregada con exito', id: resultado.insertId });
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
            res.json({ mensaje: 'ingredientes actualizado con éxito', categoria: resultado });
        } else {
            res.status(404).json({ mensaje: 'ingrediente no encontrado' });
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
            res.json({ mensaje: 'ingrediente eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'ingrediente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la ingrediente', error: error.message });
    }
};

export {
    allController,
    findController,
    createController,
    updateController,
    deleteController
};