import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService as HttpService } from "../../../shared/axios";

const insertInToDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post("/faculties/create", req.body, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });
  return response;
};

const updateByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/faculties/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });
  return response;
};

const getMyCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(`/faculties/my-courses`,
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization,
      }
    });

  return response;
};

const getMyCourseStudents = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(`/faculties/my-courses-students`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    }
  });
  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get("/faculties", {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    }
  });
  return response;
};


export const FacultyService = {
  insertInToDB,
  updateByIdFromDB,
  deleteByIdFromDB,
  getByIdFromDB,
  getMyCourses,
  getMyCourseStudents,
  getAllFromDB,
};