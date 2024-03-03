import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { OfferedCourseService } from "./offeredCourse.service";

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.updateByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseController = {
  insertIntoDB,
  updateByIdFromDB,
  deleteByIdFromDB,
  getByIdFromDB,
  getAllFromDB,
};