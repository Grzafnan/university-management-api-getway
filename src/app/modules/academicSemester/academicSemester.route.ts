import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post('/', AcademicSemesterController.insertIntoDB);

router.patch('/:id', AcademicSemesterController.updateByIdFromDB);

router.delete('/:id', AcademicSemesterController.deleteByIdFromDB);

router.get('/:id', AcademicSemesterController.getByIdFromDB);

router.get('/', AcademicSemesterController.getAllFromDB);


export const AcademicSemesterRoutes = router;