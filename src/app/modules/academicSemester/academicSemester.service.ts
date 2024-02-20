import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService as HttpService } from "../../../shared/axios";

const insertInToDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-semesters/create', req.body, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(
    '/academic-semesters', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
}

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(
    `/academic-semesters/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
}


export const AcademicSemesterService = {
  insertInToDB,
  getAllFromDB,
  getByIdFromDB
};