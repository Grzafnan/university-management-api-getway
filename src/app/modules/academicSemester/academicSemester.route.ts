import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from '../academicSemester/academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterController.insertIntoDB
);

router.patch('/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
  ),
  AcademicSemesterController.updateByIdFromDB
);

router.delete('/:id',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
  ),
  AcademicSemesterController.deleteByIdFromDB
);

router.get(
  '/:id',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
  ),
  AcademicSemesterController.getByIdFromDB
);

router.get('/',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
  ),
  AcademicSemesterController.getAllFromDB);


export const AcademicSemesterRoutes = router;