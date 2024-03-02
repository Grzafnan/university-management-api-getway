import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService as HttpService } from "../../../shared/axios";

const insertInToDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/courses/create', req.body, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(
    '/courses', {
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
    `/courses/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const updateByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/courses/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(
    `/courses/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};


const assignFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.post(
    `/courses/${id}/assign-faculty`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const removeFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(
    `/courses/${id}/remove-faculty`, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

export const CourseService = {
  insertInToDB,
  getByIdFromDB,
  updateByIdFromDB,
  deleteByIdFromDB,
  getAllFromDB,
  assignFaculty,
  removeFaculty,
};