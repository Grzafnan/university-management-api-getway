import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingController } from './building.controller';
import { BuildingValidation } from './building.validation';

const router = express.Router();

router.post(
  '/create',
  validateRequest(BuildingValidation.create),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BuildingController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(BuildingValidation.update),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BuildingController.updateByIdFromDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BuildingController.deleteByIdFromDB
);

router.get('/:id', BuildingController.getByIdFromDB);

router.get('/', BuildingController.getAllFromDB);

export const BuildingRoutes = router;
