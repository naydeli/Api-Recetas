import { Router } from "express";
import {
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from '../../controllers/procedimientos/procedimientoController.js';

const procedimientosRouter = Router();

// Rutas para la entidad de blogs
procedimientosRouter.get('/', allController);
procedimientosRouter.get('/:id', findController);
procedimientosRouter.post('/', createController);
procedimientosRouter.put('/:id', updateController);
procedimientosRouter.delete('/:id', deleteController);

export default procedimientosRouter;