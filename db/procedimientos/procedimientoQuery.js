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
        config.query('SELECT * FROM procediemtos', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar 
 */
const queryFind = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM procedimientos WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Guardar 
 */
const queryCreate = async (procedimientos) => {
    const { nombre,tiempo } = procedimientos;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO procedimientos (nombre, tiempo) VALUES (?, ?)';
        config.query(sql, [nombre, tiempo], (err, result) => {
            respuesta(err, result, resolve, reject);
        });
    });
};

/** 
 * Actualizar 
 */
const queryUpdate = async (id, procedimientos) => {
    const {nombre, tiempo} = procedimientos;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE procedimientos SET nombre = ? tiempo = ? WHERE id = ?';
        config.query(sql, [nombre, tiempo], (err, result) => {
            respuesta(err, result, resolve, reject);
        });
    });
};

/**
 * Eliminar 
 */
const queryDelete = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM procedimientos WHERE id = ?';
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
