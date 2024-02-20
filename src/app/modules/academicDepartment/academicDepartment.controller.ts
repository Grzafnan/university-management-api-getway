import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { AcademicDepartmentService } from "../academicDepartment/academicDepartment.service";


const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.insertInToDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getAllFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getByIdFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const updateByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.updateByIdFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.deleteByIdFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

export const AcademicDepartmentController = {
  insertIntoDB,
  getByIdFromDB,
  deleteByIdFromDB,
  updateByIdFromDB,
  getAllFromDB,
}