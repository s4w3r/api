import { Router } from 'express';
import infoController from '../controllers/infoController.js';


const router = new Router()

//Obtiene informacion disponible
router.get('/info',infoController.index)
//Crear nueva informacion
//router.post('/info',infoController.store)
//Obtiene detalles de la informacion por el id
//router.get('/info/:id',infoController.details)

export default router