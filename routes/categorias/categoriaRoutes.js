import { Router } from "express";
import {
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from '../../controllers/categorias/categoriaController.js';

const categoriaRouter = Router();

// Rutas 
categoriaRouter.get('/', allController);
categoriaRouter.get('/:id', findController);
categoriaRouter.post('/', createController);
categoriaRouter.put('/:id', updateController);
categoriaRouter.delete('/:id', deleteController);

export default categoriaRouter;