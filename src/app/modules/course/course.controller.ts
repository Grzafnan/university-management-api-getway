import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { CourseService } from "./course.service";

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.insertInToDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getAllFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getByIdFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const updateByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.updateByIdFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.deleteByIdFromDB(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const assignFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.assignFaculty(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

const removeFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.removeFaculty(req);
    sendResponse(res, result)
  } catch (error) {
    next(error)
  }
};

export const CourseController = {
  insertIntoDB,
  getByIdFromDB,
  deleteByIdFromDB,
  updateByIdFromDB,
  getAllFromDB,
  assignFaculty,
  removeFaculty,
}