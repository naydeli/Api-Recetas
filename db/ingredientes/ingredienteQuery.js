import config from '../../config.js';

// Función que maneja la respuesta de la base de datos
const respuesta = (err, result, resolve, reject) => {
    if (err) {
        console.log(err);
        reject(err);
    } else {
        resolve(result);
    }
};

/**
 * Cargar la lista 
 */
const queryAll = () => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM ingredientes', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar 
 */
const queryFind = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM ingredientes WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Guardar 
 */
const queryCreate = async (ingredientes) => {
    const { nombre } = ingredientes;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO ingredientes (nombre, cantidad) VALUES (?, ?)';
        config.query(sql, [nombre], (err, result) => {
            respuesta(err, result, resolve, reject);
        });
    });
};

/** 
 * Actualizar 
 */
const queryUpdate = async (id, ingredientes) => {
    const {nombre, cantidad} = ingredientes;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE ingredientes SET nombre = ?  cantidad = ? WHERE id = ?';
        config.query(sql, [nombre, cantidad], (err, result) => {
            respuesta(err, result, resolve, reject);
        });
    });
};

/**
 * Eliminar 
 */
const queryDelete = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM ingredientes WHERE id = ?';
        config.query(sql, [id], (err, result) => {
            respuesta(err, result, resolve, reject);
        });
    });
};

export {
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete
};
