import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { AcademicFacultyService } from "../academicFaculty/academicFaculty.service";


const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.insertInToDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAllFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getByIdFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const updateByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.updateByIdFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteByIdFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

export const AcademicFacultyController = {
  insertIntoDB,
  getByIdFromDB,
  deleteByIdFromDB,
  updateByIdFromDB,
  getAllFromDB,
}