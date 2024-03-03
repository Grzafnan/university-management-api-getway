import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseController } from './offeredCourse.controller';
import { OfferedCourseValidation } from './offeredCourse.validation';

const router = express.Router();

router.post(
  '/create',
  validateRequest(OfferedCourseValidation.create),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseValidation.update),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseController.updateByIdFromDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseController.deleteByIdFromDB
);

router.get('/:id', OfferedCourseController.getByIdFromDB);

router.get('/', OfferedCourseController.getAllFromDB);

export const OfferedCourseRoutes = router;
