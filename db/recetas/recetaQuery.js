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
        config.query('SELECT * FROM recetas', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar 
 */
const queryFind = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM recetas WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Guardar 
 */
const queryCreate = async (recetas) => {
    const { nombre, descripcion, tiempo, imagen } = recetas;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO recetas (nombre, descripcion, tiempo, imagen) VALUES (?, ?, ?, ?)';
        config.query(sql, [nombre, descripcion, tiempo, imagen], (err, result) => {
            respuesta(err, result, resolve, reject);
        });
    });
};

/** 
 * Actualizar 
 */
const queryUpdate = async (id, recetas) => {
    const {nombre, descripcion, tiempo, imagen} = recetas;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE categorias SET nombre = ? descripcion = ? tiempo = ? imagen = ? WHERE id = ?';
        config.query(sql, [nombre, descripcion, tiempo, imagen], (err, result) => {
            respuesta(err, result, resolve, reject);
        });
    });
};

/**
 * Eliminar 
 */
const queryDelete = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM recetas WHERE id = ?';
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
