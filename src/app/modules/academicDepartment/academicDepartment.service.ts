import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService as HttpService } from "../../../shared/axios";

const insertInToDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-departments/create', req.body, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(
    '/academic-departments', {
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
    `/academic-departments/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const updateByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/academic-departments/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(
    `/academic-departments/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};


export const AcademicDepartmentService = {
  insertInToDB,
  getByIdFromDB,
  updateByIdFromDB,
  deleteByIdFromDB,
  getAllFromDB,
};