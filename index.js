import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import categoriasRouter from './routes/categorias/categoriaRoutes.js';
import recetasRouter from './routes/recetas/recetaRoutes.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    exposedHeaders: 'Content-Length,X-Knowledge',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
};


app.use(cors(corsOptions));

// Configurar el puerto
const port = 3000;

// Usar las rutas
app.use('/categorias', categoriasRouter);
app.use('/recetas', recetasRouter);

// Levantar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});