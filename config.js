import { createPool } from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// Configuración de la conexión a la base de datos
const config = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    keepAliveInitialDelay: 300000,
    enableKeepAlive: true,
});

config.getConnection((err, connection) => {
    if (err) {
        console.log("Error al conectar a la base de datos: ", err);
    }
    if (connection) connection.release();
    console.log("Conexión exitosa a la base de datos");
});

export default config;