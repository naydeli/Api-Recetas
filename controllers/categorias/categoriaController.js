import {
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete
} from "../../db/categorias/categoriaQuery.js";

/**
* Obtener todos los blogs de la base de datos
*/
const allController = async (req, res) => {
    try {
        const categorias = await queryAll();
        res.json(categorias); 
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Obtener 
 */
const findController = async (req, res) => {
    try {
        const categorias = await queryFind(req.params.id);
        res.json(categorias); 
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
        res.json({ mensaje: 'categoria creado con éxito', id: resultado.insertId });
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
            res.json({ mensaje: 'categoria actualizado con éxito', categoria: resultado });
        } else {
            res.status(404).json({ mensaje: 'categoria no encontrada' });
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
            res.json({ mensaje: 'categoria eliminada con éxito' });
        } else {
            res.status(404).json({ mensaje: 'categoria no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la cate4goria', error: error.message });
    }
};

export {
    allController,
    findController,
    createController,
    updateController,
    deleteController
};