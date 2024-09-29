import { Router } from "express";
import {
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from '../../controllers/ingredientes/ingredienteController.js';

const ingredientesRouter = Router();

// Rutas para la entidad de blogs
ingredientesRouter.get('/', allController);
ingredientesRouter.get('/:id', findController);
ingredientesRouter.post('/', createController);
ingredientesRouter.put('/:id', updateController);
ingredientesRouter.delete('/:id', deleteController);

export default ingredientesRouter;