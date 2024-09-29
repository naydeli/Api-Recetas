import { Router } from "express";
import {
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from '../../controllers/recetas/recetaController.js';

const recetaRouter = Router();

// Rutas 
recetaRouter.get('/', allController);
recetaRouter.get('/:id', findController);
recetaRouter.post('/', createController);
recetaRouter.put('/:id', updateController);
recetaRouter.delete('/:id', deleteController);

export default recetaRouter;