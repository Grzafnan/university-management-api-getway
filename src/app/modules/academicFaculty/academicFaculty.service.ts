import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService as HttpService } from "../../../shared/axios";

const insertInToDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-faculties/create', req.body, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(
    '/academic-faculties', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(
    `/academic-faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const updateByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/academic-faculties/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(
    `/academic-faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};


export const AcademicFacultyService = {
  insertInToDB,
  getByIdFromDB,
  updateByIdFromDB,
  deleteByIdFromDB,
  getAllFromDB,
};