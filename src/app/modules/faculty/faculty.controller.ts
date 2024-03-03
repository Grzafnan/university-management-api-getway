import { NextFunction, Request, Response, } from "express";
import sendResponse from "../../../shared/response";
import { FacultyService } from "./faculty.service";

const insertInToDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.insertInToDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.updateByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getMyCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};


const getMyCourseStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getMyCourseStudents(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FacultyController = {
  insertInToDB,
  updateByIdFromDB,
  deleteByIdFromDB,
  getByIdFromDB,
  getMyCourses,
  getMyCourseStudents,
  getAllFromDB
};