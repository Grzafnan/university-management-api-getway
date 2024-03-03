import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { BuildingService } from "./building.service";

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.insertInToDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.updateByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};


export const BuildingController = {
  insertIntoDB,
  getByIdFromDB,
  updateByIdFromDB,
  deleteByIdFromDB,
  getAllFromDB,
};