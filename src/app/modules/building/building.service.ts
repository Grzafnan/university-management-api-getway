import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService as HttpService } from "../../../shared/axios";

const insertInToDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/buildings/create', req.body, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/buildings/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};


const updateByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/buildings/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/buildings/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
}

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/buildings', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    }
  });

  return response;
};


export const BuildingService = {
  insertInToDB,
  getByIdFromDB,
  updateByIdFromDB,
  deleteByIdFromDB,
  getAllFromDB,
};