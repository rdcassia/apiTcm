import { Router } from 'express';

import MunicipiosController from './app/controllers/MunicipioController';

const routes = new Router();

routes.get('/municipios', MunicipiosController.index);

export default routes;
